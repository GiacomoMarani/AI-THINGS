const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const smoothStep = (value) => value * value * (3 - 2 * value);
let homeReadyDispatched = false;

function emitHomeReady() {
  if (homeReadyDispatched) return;
  homeReadyDispatched = true;
  window.dispatchEvent(new Event("home:ready"));
}

function waitForImage(src, timeoutMs = 1500) {
  return new Promise((resolve) => {
    if (!src) {
      resolve();
      return;
    }

    const img = new Image();
    let settled = false;

    const done = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    img.decoding = "async";
    img.onload = done;
    img.onerror = done;
    img.src = src;
    window.setTimeout(done, timeoutMs);
  });
}

function waitForFonts(timeoutMs = 1200) {
  if (!document.fonts?.ready) return Promise.resolve();
  return Promise.race([
    document.fonts.ready.catch(() => undefined),
    new Promise((resolve) => window.setTimeout(resolve, timeoutMs)),
  ]);
}

function initHomeScrollBackground() {
  const isHome = document.body?.classList.contains("home-page");
  if (!isHome) return "";

  const bgRoot = document.querySelector(".home-scroll-bg");
  const slides = Array.from(document.querySelectorAll("[data-home-bg-slide]"));
  if (!slides.length) return "";
  const slideSources = slides.map((slide) => slide.dataset.homeBgSrc || "").filter(Boolean);
  const firstSrc = slideSources[0] || "";
  const loadedIndexes = new Set();
  const lastOpacities = slides.map(() => -1);

  const setSlideSource = (index, src) => {
    if (!slides[index] || !src) return;
    slides[index].style.backgroundImage = `url(\"${src}\")`;
    loadedIndexes.add(index);
  };

  if (firstSrc) {
    slides.forEach((slide) => {
      slide.style.backgroundImage = `url(\"${firstSrc}\")`;
    });
    loadedIndexes.add(0);
  }

  const preloadRealImagesProgressively = () => {
    if (slideSources.length <= 1) return;

    let cursor = 1;
    const preloadOne = () => {
      if (cursor >= slideSources.length) return;
      const index = cursor;
      const src = slideSources[index];
      cursor += 1;

      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        setSlideSource(index, src);
        setTimeout(preloadOne, 80);
      };
      img.onerror = () => {
        setTimeout(preloadOne, 80);
      };
      img.src = src;
    };

    setTimeout(preloadOne, 120);
  };

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || slides.length === 1) {
    if (slideSources[0]) {
      setSlideSource(0, slideSources[0]);
    }
    slides.forEach((slide, index) => {
      slide.style.opacity = index === 0 ? "1" : "0";
    });
    bgRoot?.style.setProperty("--home-scroll-progress", "0");
    return firstSrc;
  }

  const getScrollProgress = () => {
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    return clamp(window.scrollY / maxScroll, 0, 1);
  };

  const applyProgress = (progress) => {
    const maxIndex = slides.length - 1;
    const scaled = progress * maxIndex;
    bgRoot?.style.setProperty("--home-scroll-progress", progress.toFixed(4));

    let visibleEnergy = 0;
    slides.forEach((slide, index) => {
      const distance = Math.abs(scaled - index);
      const alpha = smoothStep(clamp(1 - distance, 0, 1));
      const isLoaded = loadedIndexes.has(index);
      const opacity = isLoaded ? alpha : 0;
      visibleEnergy += opacity;
      const roundedOpacity = Math.round(opacity * 1000) / 1000;
      if (Math.abs(lastOpacities[index] - roundedOpacity) < 0.001) return;
      lastOpacities[index] = roundedOpacity;
      slide.style.opacity = roundedOpacity.toString();
    });

    if (visibleEnergy > 0.001 || !loadedIndexes.size) return;

    let fallbackIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;
    loadedIndexes.forEach((index) => {
      const distance = Math.abs(index - scaled);
      if (distance < minDistance) {
        minDistance = distance;
        fallbackIndex = index;
      }
    });

    slides.forEach((slide, index) => {
      const fallbackOpacity = index === fallbackIndex ? 1 : 0;
      if (lastOpacities[index] === fallbackOpacity) return;
      lastOpacities[index] = fallbackOpacity;
      slide.style.opacity = fallbackOpacity ? "1" : "0";
    });
  };

  let targetProgress = getScrollProgress();
  let currentProgress = targetProgress;
  let rafId = 0;

  const animate = () => {
    rafId = 0;
    currentProgress += (targetProgress - currentProgress) * 0.04;

    if (Math.abs(targetProgress - currentProgress) < 0.0012) {
      currentProgress = targetProgress;
    }

    applyProgress(currentProgress);

    if (currentProgress !== targetProgress) {
      rafId = requestAnimationFrame(animate);
    }
  };

  const requestUpdate = () => {
    targetProgress = getScrollProgress();
    if (rafId) return;
    rafId = requestAnimationFrame(animate);
  };

  applyProgress(currentProgress);
  preloadRealImagesProgressively();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  return firstSrc;
}

function splitTextToChars(element) {
  if (!(element instanceof HTMLElement)) return [];
  if (element.dataset.splitReady === "1") {
    return Array.from(element.querySelectorAll(".char, .reveal-token"));
  }

  const text = element.textContent || "";
  if (!text.trim()) return [];
  const revealByWord =
    element.matches("p, .story-mission, .scroll-highlight-copy") || text.trim().length > 80;

  const parts = text.split(/(\s+)/);
  element.textContent = "";

  parts.forEach((part) => {
    if (!part) return;

    if (/\s+/.test(part)) {
      element.append(document.createTextNode(part));
      return;
    }

    if (revealByWord) {
      const token = document.createElement("span");
      token.className = "word reveal-token";
      token.textContent = part;
      element.append(token);
      return;
    }

    const word = document.createElement("span");
    word.className = "word";

    Array.from(part).forEach((char) => {
      const charNode = document.createElement("span");
      charNode.className = "char";
      charNode.textContent = char;
      word.append(charNode);
    });

    element.append(word);
  });

  element.dataset.splitReady = "1";
  return Array.from(element.querySelectorAll(".char, .reveal-token"));
}

function initScrollTextHighlight() {
  const targets = Array.from(document.querySelectorAll("[data-scroll-highlight]"));
  if (!targets.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    targets.forEach((target) => target.classList.add("is-highlighted"));
    return;
  }

  if (!(window.gsap && window.ScrollTrigger)) {
    targets.forEach((target) => target.classList.add("is-highlighted"));
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  targets.forEach((target) => {
    const chars = splitTextToChars(target);
    if (!chars.length) return;

    const endColor = window.getComputedStyle(target).color || "rgb(235, 241, 255)";
    const rect = target.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isHeroTarget = Boolean(target.closest(".story-section--hero"));
    const isInitiallyVisible = rect.top < viewportHeight * 0.82 && rect.bottom > viewportHeight * 0.18;

    if (isHeroTarget || isInitiallyVisible) {
      gsap.set(chars, {
        opacity: 1,
        y: 0,
        color: endColor,
      });
      target.classList.add("is-highlighted");
      return;
    }

    gsap.set(chars, {
      opacity: 0.46,
      y: 6,
      color: endColor,
    });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.68,
      stagger: 0.011,
      ease: "power2.out",
      scrollTrigger: {
        trigger: target,
        start: "top 86%",
        once: true,
      },
    });
  });
}

async function initHomeEffects() {
  const firstBackgroundSrc = initHomeScrollBackground();
  initScrollTextHighlight();
  await Promise.all([waitForImage(firstBackgroundSrc), waitForFonts()]);
  requestAnimationFrame(() => requestAnimationFrame(() => emitHomeReady()));
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      initHomeEffects();
    },
    { once: true }
  );
} else {
  initHomeEffects();
}
