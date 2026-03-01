const modal = document.getElementById("scene-nav-modal");
const sliderRoot = document.getElementById("scene-nav-slider");
const openButton = document.getElementById("btn-open-scene-nav");
const closeButton = document.getElementById("btn-close-scene-nav");
const goButton = document.getElementById("btn-scene-nav-go");

if (modal && sliderRoot && openButton && closeButton && goButton) {
  const gsapLib = window.gsap;
  const ObserverLib = window.Observer || (gsapLib && gsapLib.Observer);

  if (!gsapLib) {
    openButton.classList.add("hidden");
  } else {
    const slides = Array.from(sliderRoot.querySelectorAll(".hz-slide"));
    const slideImages = slides.map((slide) => slide.querySelector(".hz-slide-img"));
    const titles = slides.map((slide, index) => slide.dataset.title || `Slide ${index + 1}`);
    const routes = slides.map((slide) => slide.dataset.route || "/");

    const prevButton = sliderRoot.querySelector(".hz-prev");
    const nextButton = sliderRoot.querySelector(".hz-next");
    const currentCounter = sliderRoot.querySelector(".hz-current");
    const totalCounter = sliderRoot.querySelector(".hz-total");
    const titleWrap = sliderRoot.querySelector(".hz-title-wrap");
    const thumbsContainer = sliderRoot.querySelector(".hz-thumbs");
    const linesContainer = sliderRoot.querySelector(".hz-lines");

    if (!prevButton || !nextButton || !currentCounter || !totalCounter || !titleWrap || !thumbsContainer || !linesContainer || !slides.length) {
      openButton.classList.add("hidden");
    } else {
      let selectedIndex = 0;
      let isAnimating = false;
      let pendingMove = null;
      let isOpen = false;
      let wheelLockUntil = 0;
      let touchStartY = 0;
      let savedBodyOverflow = "";
      let observerInstance = null;
      let thumbs = [];
      let lines = [];

      const normalizePath = (path) => {
        if (!path || path === "/") return "/";
        return path.replace(/\/+$/, "");
      };

      const getCurrentPath = () => normalizePath(window.location.pathname);

      const toCounter = (value) => String(value + 1).padStart(2, "0");

      const setActiveSlideClasses = (index) => {
        slides.forEach((slide, slideIndex) => {
          slide.classList.toggle("is-current", slideIndex === index);
        });
      };

      const setActiveThumb = (index) => {
        thumbs.forEach((thumb, thumbIndex) => {
          thumb.classList.toggle("is-active", thumbIndex === index);
        });
      };

      const setNavigationEnabled = (enabled) => {
        const opacity = enabled ? "" : "0.45";
        const pointerEvents = enabled ? "" : "none";

        prevButton.style.opacity = opacity;
        nextButton.style.opacity = opacity;
        prevButton.style.pointerEvents = pointerEvents;
        nextButton.style.pointerEvents = pointerEvents;

        thumbs.forEach((thumb) => {
          thumb.style.pointerEvents = pointerEvents;
        });
      };

      const updateCounter = (index) => {
        currentCounter.textContent = toCounter(index);
      };

      const updateTitle = (index, animate = true) => {
        const existingTitle = titleWrap.querySelector(".hz-title");
        const nextTitle = document.createElement("div");
        nextTitle.className = "hz-title";
        nextTitle.textContent = titles[index];

        if (!animate || !existingTitle) {
          titleWrap.innerHTML = "";
          titleWrap.appendChild(nextTitle);
          return;
        }

        nextTitle.classList.add("is-enter");
        titleWrap.appendChild(nextTitle);
        requestAnimationFrame(() => {
          nextTitle.classList.remove("is-enter");
        });

        existingTitle.classList.add("is-exit");
        setTimeout(() => {
          if (existingTitle.parentElement) existingTitle.remove();
        }, 420);
      };

      const updateGoButton = () => {
        const route = normalizePath(routes[selectedIndex]);
        const currentPath = getCurrentPath();

        if (route === currentPath) {
          goButton.textContent = "RIMANI QUI";
          return;
        }

        if (route === "/") {
          goButton.textContent = "TORNA HOME";
          return;
        }

        goButton.textContent = `APRI ${titles[selectedIndex].toUpperCase()}`;
      };

      const buildLines = () => {
        const lineCount = window.innerWidth < 720 ? 34 : 52;
        linesContainer.innerHTML = "";

        const wrap = document.createElement("div");
        wrap.className = "hz-lines-wrap";

        for (let i = 0; i < lineCount; i++) {
          const line = document.createElement("div");
          line.className = "hz-line";
          wrap.appendChild(line);
        }

        linesContainer.appendChild(wrap);
        lines = Array.from(wrap.querySelectorAll(".hz-line"));
      };

      const updateLines = (activeIndex) => {
        if (!lines.length) return;
        if (activeIndex === null || activeIndex === undefined) return;

        const wrap = lines[0].parentElement;
        if (!wrap) return;

        const width = wrap.getBoundingClientRect().width || 1;
        const slideWidth = width / slides.length;
        const center = (activeIndex + 0.5) * slideWidth;
        const step = width / lines.length;
        const influence = slideWidth * 0.9;

        lines.forEach((line, lineIndex) => {
          line.style.height = "12px";
          line.style.backgroundColor = "rgba(255, 210, 198, 0.28)";

          const lineCenter = (lineIndex + 0.5) * step;
          const distance = Math.abs(lineCenter - center);
          if (distance > influence) return;

          const normalized = distance / influence;
          const wave = Math.cos((normalized * Math.PI) / 2);
          const height = 12 + wave * 28;
          const opacity = 0.28 + wave * 0.58;
          line.style.height = `${height.toFixed(2)}px`;
          line.style.backgroundColor = `rgba(255, 220, 208, ${opacity.toFixed(3)})`;
        });
      };

      const buildThumbs = () => {
        thumbsContainer.innerHTML = "";

        slides.forEach((slide, index) => {
          const thumb = document.createElement("button");
          thumb.type = "button";
          thumb.className = "hz-thumb";
          thumb.setAttribute("aria-label", `Go to ${titles[index]}`);
          thumb.style.backgroundImage = slideImages[index]?.style.backgroundImage || "";

          thumb.addEventListener("click", () => goTo(index));
          thumb.addEventListener("mouseenter", () => {
            if (!isOpen || isAnimating) return;
            updateLines(index);
          });
          thumb.addEventListener("mouseleave", () => {
            if (!isOpen || isAnimating) return;
            updateLines(selectedIndex);
          });

          thumbsContainer.appendChild(thumb);
        });

        thumbs = Array.from(thumbsContainer.querySelectorAll(".hz-thumb"));
      };

      const findIndexForCurrentPath = () => {
        const currentPath = getCurrentPath();
        const found = routes.findIndex((route) => normalizePath(route) === currentPath);
        return found === -1 ? 0 : found;
      };

      const applyState = (index, animateTitle = true) => {
        selectedIndex = index;
        setActiveSlideClasses(selectedIndex);
        setActiveThumb(selectedIndex);
        updateCounter(selectedIndex);
        updateTitle(selectedIndex, animateTitle);
        updateLines(selectedIndex);
        updateGoButton();
      };

      const runPendingMove = () => {
        if (!pendingMove) return;
        const move = pendingMove;
        pendingMove = null;
        setTimeout(() => {
          if (move.type === "go") goTo(move.index);
          if (move.type === "step") step(move.direction);
        }, 40);
      };

      const finishAnimation = (previousIndex) => {
        slides[previousIndex].classList.remove("is-current");
        gsapLib.set(slides[previousIndex], { autoAlpha: 0, scale: 1, yPercent: 0, zIndex: 1 });
        gsapLib.set(slides[selectedIndex], { autoAlpha: 1, scale: 1, yPercent: 0, zIndex: 2 });
        gsapLib.set(slideImages[previousIndex], { clearProps: "scaleY,filter,transformOrigin" });
        gsapLib.set(slideImages[selectedIndex], { clearProps: "scaleY,filter,transformOrigin" });

        isAnimating = false;
        setNavigationEnabled(true);
        updateLines(selectedIndex);
        runPendingMove();
      };

      const animateTo = (nextIndex, direction) => {
        if (nextIndex === selectedIndex) return;
        if (isAnimating) {
          pendingMove = { type: "go", index: nextIndex };
          return;
        }

        isAnimating = true;
        setNavigationEnabled(false);

        const previousIndex = selectedIndex;
        selectedIndex = nextIndex;

        setActiveThumb(selectedIndex);
        updateCounter(selectedIndex);
        updateTitle(selectedIndex, true);
        updateLines(selectedIndex);
        updateGoButton();

        const currentSlide = slides[previousIndex];
        const currentInner = slideImages[previousIndex];
        const upcomingSlide = slides[selectedIndex];
        const upcomingInner = slideImages[selectedIndex];

        gsapLib.timeline({
          onStart: () => {
            upcomingSlide.classList.add("is-current");
            gsapLib.set(upcomingSlide, { autoAlpha: 1, zIndex: 3 });
            gsapLib.set(currentSlide, { autoAlpha: 1, zIndex: 2 });
          },
          onComplete: () => finishAnimation(previousIndex),
        })
        .addLabel("start", 0)
        .fromTo(
          upcomingSlide,
          { autoAlpha: 1, scale: 0.12, yPercent: direction === 1 ? 100 : -100 },
          { duration: 0.68, ease: "expo.out", scale: 0.44, yPercent: 0 },
          "start"
        )
        .fromTo(
          upcomingInner,
          {
            filter: "brightness(0.42) contrast(1.02) saturate(0.86)",
            transformOrigin: "50% 50%",
            scaleY: 3.8,
          },
          {
            duration: 0.68,
            ease: "expo.out",
            scaleY: 1,
            filter: "brightness(0.36) contrast(1.04) saturate(0.84)",
          },
          "start"
        )
        .fromTo(
          currentInner,
          { filter: "brightness(0.36) contrast(1.04) saturate(0.84)" },
          { duration: 0.68, ease: "expo.out", filter: "brightness(0.44) contrast(1.08) saturate(1)" },
          "start"
        )
        .addLabel("middle", "start+=0.55")
        .to(upcomingSlide, { duration: 0.95, ease: "power3.inOut", scale: 1 }, "middle")
        .to(currentSlide, { duration: 0.95, ease: "power3.inOut", autoAlpha: 0, scale: 0.98 }, "middle");
      };

      const step = (direction) => {
        if (isAnimating) {
          pendingMove = { type: "step", direction };
          return;
        }

        const nextIndex = direction === 1
          ? (selectedIndex + 1) % slides.length
          : (selectedIndex - 1 + slides.length) % slides.length;

        animateTo(nextIndex, direction);
      };

      const goTo = (index) => {
        if (index < 0 || index >= slides.length || index === selectedIndex) return;
        const direction = index > selectedIndex ? 1 : -1;
        animateTo(index, direction);
      };

      const openModal = () => {
        if (isOpen) return;
        isOpen = true;
        savedBodyOverflow = document.body.style.overflow || "";
        document.body.style.overflow = "hidden";

        modal.classList.remove("hidden");
        modal.setAttribute("aria-hidden", "false");
        openButton.setAttribute("aria-expanded", "true");

        const initialIndex = findIndexForCurrentPath();
        gsapLib.set(slides, { autoAlpha: 0, scale: 1, yPercent: 0, zIndex: 1 });
        gsapLib.set(slideImages, { clearProps: "scaleY,filter,transformOrigin" });
        applyState(initialIndex, false);
        gsapLib.set(slides[initialIndex], { autoAlpha: 1, zIndex: 2 });

        if (observerInstance && typeof observerInstance.enable === "function") {
          observerInstance.enable();
        }
      };

      const closeModal = () => {
        if (!isOpen) return;
        isOpen = false;
        isAnimating = false;
        pendingMove = null;

        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
        openButton.setAttribute("aria-expanded", "false");
        document.body.style.overflow = savedBodyOverflow;

        if (observerInstance && typeof observerInstance.disable === "function") {
          observerInstance.disable();
        }
      };

      const goToSelectedRoute = () => {
        const targetRoute = normalizePath(routes[selectedIndex]);
        const currentPath = getCurrentPath();
        if (targetRoute === currentPath) {
          closeModal();
          return;
        }
        window.location.assign(targetRoute);
      };

      const onWheel = (event) => {
        if (!isOpen) return;
        const now = performance.now();
        if (now < wheelLockUntil) return;
        if (Math.abs(event.deltaY) < 14) return;

        wheelLockUntil = now + 320;
        if (event.deltaY > 0) {
          step(1);
          return;
        }
        step(-1);
      };

      const onTouchStart = (event) => {
        if (!isOpen || !event.touches || !event.touches.length) return;
        touchStartY = event.touches[0].clientY;
      };

      const onTouchEnd = (event) => {
        if (!isOpen || !event.changedTouches || !event.changedTouches.length) return;

        const touchEndY = event.changedTouches[0].clientY;
        const delta = touchEndY - touchStartY;
        if (Math.abs(delta) < 45) return;
        if (delta > 0) {
          step(-1);
        } else {
          step(1);
        }
      };

      const onKeyDown = (event) => {
        if (!isOpen) return;
        if (event.key === "Escape") {
          closeModal();
          return;
        }
        if (event.key === "ArrowRight") {
          step(1);
          return;
        }
        if (event.key === "ArrowLeft") {
          step(-1);
          return;
        }
        if (event.key === "Enter") {
          goToSelectedRoute();
        }
      };

      const onResize = () => {
        if (!isOpen) return;
        buildLines();
        updateLines(selectedIndex);
      };

      const onBackdropClick = (event) => {
        if (event.target === modal) {
          closeModal();
        }
      };

      const onBeforeUnload = () => {
        if (observerInstance && typeof observerInstance.kill === "function") {
          observerInstance.kill();
        }
      };

      const initObserver = () => {
        if (!ObserverLib || typeof ObserverLib.create !== "function") return;
        observerInstance = ObserverLib.create({
          target: sliderRoot,
          type: "wheel,touch,pointer",
          onDown: () => {
            if (!isOpen) return;
            step(-1);
          },
          onUp: () => {
            if (!isOpen) return;
            step(1);
          },
          wheelSpeed: -1,
          tolerance: 10,
          preventDefault: true,
        });

        if (observerInstance && typeof observerInstance.disable === "function") {
          observerInstance.disable();
        }
      };

      buildThumbs();
      buildLines();
      totalCounter.textContent = String(slides.length).padStart(2, "0");
      applyState(0, false);
      setNavigationEnabled(true);
      initObserver();

      openButton.addEventListener("click", openModal);
      closeButton.addEventListener("click", closeModal);
      goButton.addEventListener("click", goToSelectedRoute);
      prevButton.addEventListener("click", () => step(-1));
      nextButton.addEventListener("click", () => step(1));

      modal.addEventListener("click", onBackdropClick);
      sliderRoot.addEventListener("wheel", onWheel, { passive: true });
      sliderRoot.addEventListener("touchstart", onTouchStart, { passive: true });
      sliderRoot.addEventListener("touchend", onTouchEnd, { passive: true });
      document.addEventListener("keydown", onKeyDown);
      window.addEventListener("resize", onResize);
      window.addEventListener("beforeunload", onBeforeUnload);
    }
  }
}
