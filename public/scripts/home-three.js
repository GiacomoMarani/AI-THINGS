const root = document.getElementById("hero-zoom-slider");

if (root) {
  const gsapLib = window.gsap;
  if (!gsapLib) {
    console.warn("GSAP not available: hero zoom slider disabled.");
  } else {
    const slides = Array.from(root.querySelectorAll(".hz-slide"));
    const slideImages = slides.map((slide) => slide.querySelector(".hz-slide-img"));
    const titles = slides.map((slide, index) => slide.dataset.title || `Slide ${index + 1}`);

    const prevButton = root.querySelector(".hz-prev");
    const nextButton = root.querySelector(".hz-next");
    const currentCounter = root.querySelector(".hz-current");
    const totalCounter = root.querySelector(".hz-total");
    const titleWrap = root.querySelector(".hz-title-wrap");
    const thumbsContainer = root.querySelector(".hz-thumbs");
    const linesContainer = root.querySelector(".hz-lines");

    let thumbs = [];
    let lines = [];
    let current = 0;
    let isAnimating = false;
    let pendingNavigation = null;
    let hoveredThumbIndex = null;
    let thumbsHovered = false;
    let wheelLockUntil = 0;
    let touchStartY = 0;

    const heroSection = root.closest(".story-section--hero");

    const toCounter = (index) => String(index + 1).padStart(2, "0");

    const isHeroInFocus = () => {
      if (!heroSection) return true;
      const rect = heroSection.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.32;
    };

    const updateCounter = (index) => {
      if (currentCounter) currentCounter.textContent = toCounter(index);
    };

    const updateTitle = (index) => {
      if (!titleWrap) return;

      const previousTitle = titleWrap.querySelector(".hz-title");
      const nextTitle = document.createElement("div");
      nextTitle.className = "hz-title is-enter";
      nextTitle.textContent = titles[index];
      titleWrap.appendChild(nextTitle);

      requestAnimationFrame(() => {
        nextTitle.classList.remove("is-enter");
      });

      if (previousTitle) {
        previousTitle.classList.add("is-exit");
        setTimeout(() => previousTitle.remove(), 420);
      }
    };

    const setActiveThumb = (index) => {
      thumbs.forEach((thumb, thumbIndex) => {
        thumb.classList.toggle("is-active", thumbIndex === index);
      });
    };

    const buildThumbs = () => {
      if (!thumbsContainer) return;
      thumbsContainer.innerHTML = "";

      slides.forEach((slide, index) => {
        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "hz-thumb";
        thumb.setAttribute("aria-label", `Go to slide ${index + 1}`);

        const backgroundImage = slideImages[index]?.style.backgroundImage || "";
        thumb.style.backgroundImage = backgroundImage;

        if (index === current) thumb.classList.add("is-active");

        thumb.addEventListener("click", () => goTo(index));
        thumb.addEventListener("mouseenter", () => {
          hoveredThumbIndex = index;
          thumbsHovered = true;
          if (!isAnimating) updateLines(index);
        });
        thumb.addEventListener("mouseleave", () => {
          hoveredThumbIndex = null;
        });

        thumbsContainer.appendChild(thumb);
      });

      thumbs = Array.from(thumbsContainer.querySelectorAll(".hz-thumb"));

      thumbsContainer.addEventListener("mouseenter", () => {
        thumbsHovered = true;
      });

      thumbsContainer.addEventListener("mouseleave", () => {
        thumbsHovered = false;
        hoveredThumbIndex = null;
        updateLines(current);
      });
    };

    const buildLines = () => {
      if (!linesContainer) return;
      const lineCount = window.innerWidth < 700 ? 36 : 52;
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
      if (!lines.length || activeIndex === null || activeIndex === undefined) return;

      const track = lines[0].parentElement;
      if (!track) return;

      const width = track.getBoundingClientRect().width || 1;
      const slideCount = slides.length || 1;
      const thumbWidth = width / slideCount;
      const center = (activeIndex + 0.5) * thumbWidth;
      const lineSpacing = width / lines.length;
      const maxInfluence = thumbWidth * 0.9;

      lines.forEach((line, lineIndex) => {
        line.style.height = "12px";
        line.style.backgroundColor = "rgba(255, 210, 198, 0.28)";

        const lineCenter = (lineIndex + 0.5) * lineSpacing;
        const distance = Math.abs(lineCenter - center);
        if (distance > maxInfluence) return;

        const normalized = distance / maxInfluence;
        const wave = Math.cos((normalized * Math.PI) / 2);
        const height = 12 + wave * 28;
        const opacity = 0.28 + wave * 0.58;
        line.style.height = `${height.toFixed(2)}px`;
        line.style.backgroundColor = `rgba(255, 220, 208, ${opacity.toFixed(3)})`;
      });
    };

    const setNavigationEnabled = (enabled) => {
      const pointerEvents = enabled ? "" : "none";
      const opacity = enabled ? "" : "0.45";

      if (prevButton) {
        prevButton.style.pointerEvents = pointerEvents;
        prevButton.style.opacity = opacity;
      }

      if (nextButton) {
        nextButton.style.pointerEvents = pointerEvents;
        nextButton.style.opacity = opacity;
      }

      thumbs.forEach((thumb) => {
        thumb.style.pointerEvents = pointerEvents;
      });
    };

    const queueNavigation = (type, payload) => {
      pendingNavigation = { type, payload };
    };

    const runPendingNavigation = () => {
      if (!pendingNavigation) return;
      const { type, payload } = pendingNavigation;
      pendingNavigation = null;

      setTimeout(() => {
        if (type === "goto") {
          goTo(payload.index, payload.directionHint);
          return;
        }
        if (type === "step") {
          navigateStep(payload.direction);
        }
      }, 40);
    };

    const completeNavigation = (previousIndex) => {
      slides[previousIndex].classList.remove("is-current");
      gsapLib.set(slides[previousIndex], { autoAlpha: 0, scale: 1, yPercent: 0, zIndex: 1 });
      gsapLib.set(slideImages[previousIndex], { clearProps: "scaleY,filter,transformOrigin" });

      gsapLib.set(slides[current], { autoAlpha: 1, scale: 1, yPercent: 0, zIndex: 2 });
      gsapLib.set(slideImages[current], { clearProps: "scaleY,filter,transformOrigin" });

      isAnimating = false;
      setNavigationEnabled(true);

      if (thumbsHovered && hoveredThumbIndex !== null) {
        updateLines(hoveredThumbIndex);
      } else {
        updateLines(current);
      }

      runPendingNavigation();
    };

    const animateTo = (targetIndex, direction) => {
      if (targetIndex === current || targetIndex < 0 || targetIndex >= slides.length) return;

      if (isAnimating) {
        queueNavigation("goto", { index: targetIndex, directionHint: direction });
        return;
      }

      isAnimating = true;
      setNavigationEnabled(false);

      const previous = current;
      current = targetIndex;

      setActiveThumb(current);
      updateCounter(current);
      updateTitle(current);
      updateLines(current);

      const currentSlide = slides[previous];
      const currentInner = slideImages[previous];
      const upcomingSlide = slides[current];
      const upcomingInner = slideImages[current];

      gsapLib.timeline({
        onStart: () => {
          upcomingSlide.classList.add("is-current");
          gsapLib.set(upcomingSlide, { autoAlpha: 1, zIndex: 3 });
          gsapLib.set(currentSlide, { autoAlpha: 1, zIndex: 2 });
        },
        onComplete: () => completeNavigation(previous),
      })
      .addLabel("start", 0)
      .fromTo(
        upcomingSlide,
        {
          autoAlpha: 1,
          scale: 0.12,
          yPercent: direction === 1 ? 100 : -100,
        },
        {
          duration: 0.68,
          ease: "expo.out",
          scale: 0.44,
          yPercent: 0,
        },
        "start"
      )
      .fromTo(
        upcomingInner,
        {
          transformOrigin: "50% 50%",
          scaleY: 3.8,
          filter: "brightness(0.42) contrast(1.02) saturate(0.86)",
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
        {
          filter: "brightness(0.36) contrast(1.04) saturate(0.84)",
        },
        {
          duration: 0.68,
          ease: "expo.out",
          filter: "brightness(0.43) contrast(1.08) saturate(0.98)",
        },
        "start"
      )
      .addLabel("middle", "start+=0.55")
      .to(
        upcomingSlide,
        {
          duration: 0.94,
          ease: "power3.inOut",
          scale: 1,
        },
        "middle"
      )
      .to(
        currentSlide,
        {
          duration: 0.94,
          ease: "power3.inOut",
          autoAlpha: 0,
          scale: 0.98,
        },
        "middle"
      );
    };

    const navigateStep = (direction) => {
      if (isAnimating) {
        queueNavigation("step", { direction });
        return;
      }

      const target = direction === 1
        ? (current + 1) % slides.length
        : (current - 1 + slides.length) % slides.length;

      animateTo(target, direction);
    };

    const goTo = (index, directionHint) => {
      if (index === current) return;

      let direction = directionHint;
      if (direction !== 1 && direction !== -1) {
        direction = index > current ? 1 : -1;
      }

      animateTo(index, direction);
    };

    const onWheel = (event) => {
      const now = performance.now();
      if (now < wheelLockUntil || Math.abs(event.deltaY) < 14) return;
      if (!isHeroInFocus()) return;

      wheelLockUntil = now + 350;
      if (event.deltaY > 0) {
        navigateStep(1);
        return;
      }
      navigateStep(-1);
    };

    const onTouchStart = (event) => {
      if (!event.touches || !event.touches.length) return;
      touchStartY = event.touches[0].clientY;
    };

    const onTouchEnd = (event) => {
      if (!event.changedTouches || !event.changedTouches.length) return;
      if (!isHeroInFocus()) return;

      const touchEndY = event.changedTouches[0].clientY;
      const delta = touchEndY - touchStartY;
      if (Math.abs(delta) < 45) return;
      if (delta > 0) {
        navigateStep(-1);
      } else {
        navigateStep(1);
      }
    };

    const onKeyDown = (event) => {
      if (!isHeroInFocus()) return;
      if (event.key === "ArrowRight") {
        navigateStep(1);
        return;
      }
      if (event.key === "ArrowLeft") {
        navigateStep(-1);
      }
    };

    const onResize = () => {
      buildLines();
      updateLines(thumbsHovered && hoveredThumbIndex !== null ? hoveredThumbIndex : current);
    };

    const init = () => {
      if (!slides.length) return;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-current", index === 0);
        gsapLib.set(slide, {
          autoAlpha: index === 0 ? 1 : 0,
          scale: 1,
          yPercent: 0,
          zIndex: index === 0 ? 2 : 1,
        });
      });

      buildThumbs();
      buildLines();

      if (totalCounter) totalCounter.textContent = String(slides.length).padStart(2, "0");
      updateCounter(0);
      updateTitle(0);
      updateLines(0);

      if (prevButton) prevButton.addEventListener("click", () => navigateStep(-1));
      if (nextButton) nextButton.addEventListener("click", () => navigateStep(1));

      root.addEventListener("wheel", onWheel, { passive: true });
      root.addEventListener("touchstart", onTouchStart, { passive: true });
      root.addEventListener("touchend", onTouchEnd, { passive: true });
      document.addEventListener("keydown", onKeyDown);
      window.addEventListener("resize", onResize);
      window.addEventListener("beforeunload", destroy);
    };

    const destroy = () => {
      root.removeEventListener("wheel", onWheel);
      root.removeEventListener("touchstart", onTouchStart);
      root.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("beforeunload", destroy);
    };

    init();
  }
}
