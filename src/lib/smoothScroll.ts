const SCROLL_DURATION_MS = 800;

let activeScrollFrame: number | null = null;

function getSectionId(href: string) {
  return href.startsWith("/#") ? href.slice(2) : null;
}

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3;
}

/** Smoothly moves to an in-page target, including when its hash is already active. */
export function scrollToSectionHref(href: string) {
  const sectionId = getSectionId(href);
  const target = sectionId ? document.getElementById(sectionId) : null;

  if (!sectionId || !target) return false;

  const startY = window.scrollY;
  const scrollMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
  const targetY = Math.max(0, startY + target.getBoundingClientRect().top - scrollMargin);

  window.history.replaceState(null, "", href);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return true;
  }

  if (activeScrollFrame) window.cancelAnimationFrame(activeScrollFrame);

  const distance = targetY - startY;
  const startTime = window.performance.now();

  function animate(currentTime: number) {
    const progress = Math.min((currentTime - startTime) / SCROLL_DURATION_MS, 1);
    window.scrollTo(0, startY + distance * easeOutCubic(progress));

    if (progress < 1) activeScrollFrame = window.requestAnimationFrame(animate);
    else activeScrollFrame = null;
  }

  activeScrollFrame = window.requestAnimationFrame(animate);
  return true;
}
