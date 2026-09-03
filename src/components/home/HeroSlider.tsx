"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent, type TouchEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { HeroContent } from "@/types/site-content.types";

interface HeroSliderProps {
  hero: HeroContent;
}

const AUTOPLAY_INTERVAL_MS = 6000;
const SWIPE_THRESHOLD_PX = 40;

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

const ARROW_BUTTON_STYLES =
  "absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-ink shadow-lg ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-text-inverse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

/**
 * Home page hero carousel.
 *
 * Below `md`, text and photo stack as a simple card (the photo keeps a
 * friendly 3:2 crop). From `md` up, the photo becomes a full-width banner
 * with the text overlaid on the left over a light gradient — the arrows
 * are anchored to the photo's own wrapper, which is either just the
 * image (mobile) or the whole banner (md+), so they always land in a
 * sensible place without extra breakpoint-specific duplicates.
 */
export function HeroSlider({ hero }: HeroSliderProps) {
  const { slides } = hero;
  const slideCount = slides.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef(0);

  useEffect(() => {
    if (!isAutoplayEnabled || isHoverPaused || prefersReducedMotion || slideCount <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => wrapIndex(current + 1, slideCount));
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isAutoplayEnabled, isHoverPaused, prefersReducedMotion, slideCount]);

  function goToSlide(index: number) {
    setActiveIndex(wrapIndex(index, slideCount));
    setIsAutoplayEnabled(false);
  }

  function goToPrevious() {
    goToSlide(activeIndex - 1);
  }

  function goToNext() {
    goToSlide(activeIndex + 1);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
  }

  function handleTouchMove(event: TouchEvent) {
    if (touchStartXRef.current === null) return;
    touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
  }

  function handleTouchEnd() {
    if (touchDeltaXRef.current > SWIPE_THRESHOLD_PX) {
      goToPrevious();
    } else if (touchDeltaXRef.current < -SWIPE_THRESHOLD_PX) {
      goToNext();
    }
    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  }

  const trackTransform = { transform: `translateX(-${activeIndex * 100}%)` };
  const currentSlide = slides[activeIndex];

  return (
    <section
      aria-roledescription="carousel"
      aria-label={currentSlide.heading}
      className="relative"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Container className="pt-8 md:pt-10">
        <div
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-sm ring-1 ring-black/5"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
        >
          <div className="flex flex-col md:relative min-h-[520px] md:min-h-[500px] lg:min-h-[520px]">
            {/* Text track */}
            <div className="overflow-hidden md:absolute md:inset-0 md:z-10 md:flex md:items-center order-last md:order-none">
              <div
                className="flex w-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                style={trackTransform}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.heading}
                    className="w-full shrink-0"
                    aria-hidden={index !== activeIndex}
                    inert={index !== activeIndex}
                  >
                    <div className="flex flex-col gap-4 px-5 py-8 sm:px-8 sm:py-10 lg:px-14 lg:py-16 md:max-w-xl md:gap-4 md:py-0 md:pr-10 md:pl-16 lg:pl-28">
                      <span className="relative w-fit overflow-hidden rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-primary/10 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-white/90">
                        {slide.eyebrow}
                      </span>
                      <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl lg:leading-[1.08]">{slide.heading}</h1>
                      <p className="text-sm sm:text-base leading-6 sm:leading-7 text-text-primary/85 max-w-xl">{slide.description}</p>
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-2">
                        <Button href={slide.primaryCta.href} className="w-full sm:w-auto text-sm">
                          {slide.primaryCta.label}
                        </Button>
                        <Button href={slide.secondaryCta.href} variant="outline" className="w-full sm:w-auto text-sm">
                          {slide.secondaryCta.label}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image track — the arrows anchor to this wrapper, which is just
                the photo on mobile and the whole banner (inset-0) at md+. */}
            <div className="relative overflow-hidden order-first md:order-none md:absolute md:inset-0">
              <div
                className="flex w-full transition-transform duration-700 ease-in-out motion-reduce:transition-none md:h-full"
                style={trackTransform}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.image.src}
                    className="w-full shrink-0 md:h-full"
                    aria-hidden={index !== activeIndex}
                  >
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      width={slide.image.width ?? 1200}
                      height={slide.image.height ?? 800}
                      sizes="100vw"
                      priority={index === 0}
                      className="h-auto w-full object-contain md:h-full md:object-cover md:object-left"
                    />
                  </div>
                ))}
              </div>

              {slideCount > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                    className={`${ARROW_BUTTON_STYLES} left-3 sm:left-4 md:left-6`}
                  >
                    <Icon name="chevron-left" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next slide"
                    className={`${ARROW_BUTTON_STYLES} right-3 sm:right-4 md:right-6`}
                  >
                    <Icon name="chevron-right" className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>

            {/* Legibility gradient, banner mode only */}
            <div className="hero-content-scrim hidden md:absolute md:inset-0 md:z-[1] md:block" />
          </div>

          {/* Pagination dots — overlaid on the image, pinned to its bottom edge */}
          {slideCount > 1 ? (
            <div className="absolute inset-x-0 bottom-4 z-20 hidden md:flex justify-center md:bottom-6">
              <div className="flex items-center gap-2 rounded-full bg-surface/80 px-3 py-2 shadow-lg backdrop-blur-md">
                {slides.map((slide, index) => {
                  const active = index === activeIndex;
                  return (
                    <button
                      key={slide.heading}
                      type="button"
                      onClick={() => goToSlide(index)}
                      aria-current={active}
                      aria-label={`Show slide ${index + 1} of ${slideCount}`}
                      className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        active ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary-light"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
