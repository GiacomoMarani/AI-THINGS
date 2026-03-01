const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (start, end, amount) => start + (end - start) * amount;
const isHomePage = () => document.body?.classList.contains("home-page");

function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) return;

  let ticking = false;

  const update = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    progressBar.style.width = `${clamp(pct, 0, 100)}%`;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", update);
}

function initHomeSectionProgress() {
  const sections = Array.from(document.querySelectorAll("[data-progress-section]"));
  const links = Array.from(document.querySelectorAll(".home-progress-link[data-section-link]"));
  if (!sections.length || !links.length) return;

  const activate = (id) => {
    links.forEach((link) => {
      link.classList.toggle("active", link.dataset.sectionLink === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      activate(visible[0].target.id);
    },
    {
      threshold: [0.2, 0.45, 0.7],
      rootMargin: "-30% 0px -40% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealEffects() {
  const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delayMs = Number(entry.target.dataset.revealDelay || 0);
        if (Number.isFinite(delayMs) && delayMs > 0) {
          entry.target.style.transitionDelay = `${delayMs}ms`;
        }
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function initHeroButtonMicroInteractions() {
  if (isHomePage()) return;
  const buttons = Array.from(document.querySelectorAll(".hero-btn"));
  if (!buttons.length) return;

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover) return;

  const reset = (button) => {
    button.style.transform = "";
    button.style.boxShadow = "";
  };

  buttons.forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = clamp(-y * 8, -8, 8);
      const rotateY = clamp(x * 10, -10, 10);
      const lift = button.classList.contains("hero-btn-primary") ? -2.4 : -1.4;

      button.style.transform = `translate3d(0, ${lift}px, 0) perspective(460px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      button.style.boxShadow = button.classList.contains("hero-btn-primary")
        ? "0 12px 28px rgba(214, 64, 51, 0.3)"
        : "0 10px 20px rgba(8, 12, 20, 0.35)";
    });

    button.addEventListener("pointerleave", () => reset(button));
    button.addEventListener("blur", () => reset(button));
  });
}

function initHeroAtmosphere() {
  if (isHomePage()) return;
  const hero = document.querySelector(".story-section--hero");
  if (!hero) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const pointerScale = window.matchMedia("(pointer: coarse)").matches ? 0.45 : 1;
  const target = {
    gridX: 0,
    gridY: 0,
    glow: 0,
    scrollY: 0,
    copyY: 0,
  };
  const state = { ...target };
  let rafId = 0;

  const setVar = (name, value) => {
    hero.style.setProperty(name, `${value.toFixed(2)}px`);
  };

  const schedule = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(animate);
  };

  const animate = () => {
    rafId = 0;

    state.gridX = lerp(state.gridX, target.gridX, 0.12);
    state.gridY = lerp(state.gridY, target.gridY, 0.12);
    state.glow = lerp(state.glow, target.glow, 0.12);
    state.scrollY = lerp(state.scrollY, target.scrollY, 0.1);
    state.copyY = lerp(state.copyY, target.copyY, 0.1);

    setVar("--hero-grid-x", state.gridX);
    setVar("--hero-grid-y", state.gridY);
    setVar("--hero-glow-shift", state.glow);
    setVar("--hero-scroll-y", state.scrollY);
    setVar("--hero-copy-y", state.copyY);

    const stillMoving =
      Math.abs(state.gridX - target.gridX) > 0.05 ||
      Math.abs(state.gridY - target.gridY) > 0.05 ||
      Math.abs(state.glow - target.glow) > 0.05 ||
      Math.abs(state.scrollY - target.scrollY) > 0.05 ||
      Math.abs(state.copyY - target.copyY) > 0.05;

    if (stillMoving) {
      schedule();
    }
  };

  const updateScrollTargets = () => {
    const rect = hero.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
    const progress = clamp(centerOffset / viewportHeight, -1, 1);

    target.scrollY = clamp(-progress * 12, -12, 12);
    target.copyY = clamp(-progress * 7, -8, 8);
    schedule();
  };

  if (canHover) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      target.gridX = clamp(x * 12 * pointerScale, -10, 10);
      target.gridY = clamp(y * 9 * pointerScale, -8, 8);
      target.glow = clamp((x * 14 + y * 8) * pointerScale, -14, 14);
      schedule();
    });

    hero.addEventListener("pointerleave", () => {
      target.gridX = 0;
      target.gridY = 0;
      target.glow = 0;
      schedule();
    });
  }

  updateScrollTargets();
  window.addEventListener("scroll", updateScrollTargets, { passive: true });
  window.addEventListener("resize", updateScrollTargets);
}

function initParallaxEffects() {
  if (isHomePage()) return;
  const parallaxElements = Array.from(document.querySelectorAll("[data-parallax]"));
  if (!parallaxElements.length) return;

  let ticking = false;

  const update = () => {
    const viewportHeight = window.innerHeight || 1;

    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const speed = Number(element.dataset.parallax || 0.12);
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const progress = centerOffset / viewportHeight;
      const translateY = clamp(-progress * speed * 140, -30, 30);

      element.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    });
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", update);
}

function initCardAnimations() {
  const revealSelector = [
    ".module-card",
    ".intel-card",
    ".repo-terminal-card",
    ".briefing-panel",
    ".docs-section-header",
    ".review-summary",
    ".review-log",
    ".bg-interactive",
  ].join(", ");
  const hoverSelector = [
    ".module-card",
    ".intel-card",
    ".repo-terminal-card",
    ".briefing-panel",
    ".docs-section-header",
    ".review-summary",
    ".review-log",
    ".bg-interactive",
    ".story-section--module",
  ].join(", ");

  const revealSeen = new WeakSet();
  const hoverSeen = new WeakSet();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let revealOrder = 0;
  const isFxDisabled = (element) => {
    if (!(element instanceof Element)) return false;
    const disabledRoot = element.closest("[data-card-fx='off']");
    return Boolean(disabledRoot);
  };

  const revealObserver = reducedMotion
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -8% 0px",
        }
      );

  const registerReveal = (element) => {
    if (!(element instanceof HTMLElement) || revealSeen.has(element)) return;
    if (isFxDisabled(element)) return;
    revealSeen.add(element);
    element.classList.add("card-reveal");
    element.style.setProperty("--card-enter-delay", `${Math.min(revealOrder, 8) * 52}ms`);
    revealOrder += 1;

    if (reducedMotion) {
      element.classList.add("is-visible");
      return;
    }

    revealObserver.observe(element);
  };

  const registerHover = (element) => {
    if (!(element instanceof HTMLElement) || hoverSeen.has(element)) return;
    if (isFxDisabled(element)) return;
    hoverSeen.add(element);
    element.classList.add("card-hover-fx");
  };

  const scanRoot = (root) => {
    if (!(root instanceof Element || root instanceof Document)) return;

    if (root instanceof Element && root.matches(revealSelector)) {
      registerReveal(root);
    }
    if (root instanceof Element && root.matches(hoverSelector)) {
      registerHover(root);
    }

    root.querySelectorAll(revealSelector).forEach(registerReveal);
    root.querySelectorAll(hoverSelector).forEach(registerHover);
  };

  scanRoot(document);

  const dynamicContainers = Array.from(
    document.querySelectorAll(
      "#results-container, #titans-container, #mcp-container, #docs-container, .story-modules"
    )
  );
  if (!dynamicContainers.length) return;

  const dynamicObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        scanRoot(node);
      });
    });
  });

  dynamicContainers.forEach((container) => {
    dynamicObserver.observe(container, { childList: true, subtree: true });
  });
}

function initCardTextHoverScroll() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canHover || reducedMotion) return;

  const targetSelector = [
    ".repo-terminal-card .repo-file-name",
    ".repo-terminal-card .repo-line",
    ".intel-card .intel-owner",
  ].join(", ");
  const seen = new WeakSet();
  let resizeRaf = 0;

  const updateOverflowState = (element) => {
    if (!(element instanceof HTMLElement)) return;
    const overflowDistance = Math.ceil(element.scrollWidth - element.clientWidth);

    if (overflowDistance > 8) {
      element.classList.add("is-overflowing");
      element.style.setProperty("--hover-scroll-distance", `${overflowDistance + 12}px`);
      const durationMs = Math.round(clamp(overflowDistance * 42, 1800, 8200));
      const delayMs = Math.round(clamp(overflowDistance * 1.1, 180, 420));
      element.style.setProperty("--hover-scroll-duration", `${durationMs}ms`);
      element.style.setProperty("--hover-scroll-delay", `${delayMs}ms`);
      element.removeAttribute("title");
      return;
    }

    element.classList.remove("is-overflowing");
    element.style.setProperty("--hover-scroll-distance", "0px");
    element.style.setProperty("--hover-scroll-duration", "0ms");
    element.style.setProperty("--hover-scroll-delay", "0ms");
    element.removeAttribute("title");
  };

  const registerTarget = (element) => {
    if (!(element instanceof HTMLElement) || seen.has(element)) return;
    seen.add(element);
    element.classList.add("hover-scroll-text");
    element.removeAttribute("title");
    updateOverflowState(element);
  };

  const scanRoot = (root) => {
    if (!(root instanceof Element || root instanceof Document)) return;

    if (root instanceof Element && root.matches(targetSelector)) {
      registerTarget(root);
    }

    root.querySelectorAll(targetSelector).forEach(registerTarget);
  };

  scanRoot(document);

  const dynamicContainers = Array.from(
    document.querySelectorAll(
      "#results-container, #titans-container, #mcp-container, #docs-container, #code-review-list"
    )
  );
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        scanRoot(node);
      });
    });
  });

  dynamicContainers.forEach((container) => {
    observer.observe(container, { childList: true, subtree: true });
  });

  window.addEventListener("resize", () => {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;
      document.querySelectorAll(targetSelector).forEach((element) => {
        updateOverflowState(element);
      });
    });
  });
}

function init() {
  initScrollProgress();
  initHomeSectionProgress();
  initRevealEffects();
  initHeroAtmosphere();
  initParallaxEffects();
  initCardAnimations();
  initCardTextHoverScroll();
  initHeroButtonMicroInteractions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
