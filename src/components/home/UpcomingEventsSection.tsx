"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { EventItem, EventsContent } from "@/types/site-content.types";

interface UpcomingEventsSectionProps {
  events: EventsContent;
}

function useReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-shadow duration-300 motion-safe:hover:shadow-md">
      <div className="relative aspect-video shrink-0 overflow-hidden bg-surface-muted">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 44vw, 78vw"
          className="object-contain"
        />
      </div>
      <div className="relative flex flex-1 flex-col px-4 pb-4 pt-8 sm:px-5 sm:pb-5">
        <div className="absolute left-4 top-0 -translate-y-1/2 rounded-md border border-border bg-surface px-2.5 py-1.5 text-center shadow-sm sm:left-5">
          <span className="block text-lg font-extrabold leading-none text-primary">{event.day}</span>
          <span className="mt-0.5 block text-xs font-bold tracking-wide text-text-secondary">{event.month}</span>
        </div>
        <span className="self-end rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          {event.tag}
        </span>
        <div className="mt-2">
          <h3 className="text-sm font-bold text-text-primary sm:text-base">{event.title}</h3>
          <p className="mt-1 text-sm leading-6 text-text-secondary">{event.description}</p>
        </div>
        <div className="mt-3 space-y-1.5 border-t border-border pt-3 text-sm text-text-secondary">
          <p className="flex items-center gap-1.5"><Icon name="clock" className="h-3.5 w-3.5 shrink-0 text-primary" />{event.time}</p>
          <p className="flex items-center gap-1.5"><Icon name="map-pin" className="h-3.5 w-3.5 shrink-0 text-primary" />{event.location}</p>
        </div>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="rounded-full border border-accent-green/25 bg-accent-green/10 px-2.5 py-1 text-xs font-bold text-accent-green">
            {event.status}
          </span>
          <JoinMovementButton label="View Event" className="min-h-9 rounded-md px-3 text-sm shadow-sm" />
        </div>
      </div>
    </article>
  );
}

/** API-driven event carousel. Swiper provides drag, keyboard, arrows and pagination. */
export function UpcomingEventsSection({ events }: UpcomingEventsSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section id="upcoming-events" aria-labelledby="upcoming-events-heading" className="scroll-mt-24 bg-surface-muted">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <h2 id="upcoming-events-heading" className="text-center text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {events.heading}
        </h2>
        <div className="events-carousel relative mx-auto mt-5 max-w-[1120px] px-10 pb-8 sm:px-12">
          <button type="button" className="events-carousel-control events-carousel-prev" aria-label="Show previous events">
            <Icon name="chevron-left" className="h-4 w-4" />
          </button>
          <Swiper
            className="events-swiper"
            modules={[A11y, Keyboard, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            speed={reducedMotion ? 0 : 450}
            navigation={{ prevEl: ".events-carousel-prev", nextEl: ".events-carousel-next" }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{ enabled: true, prevSlideMessage: "Show previous events", nextSlideMessage: "Show next events" }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {events.events.map((event) => (
              <SwiperSlide key={event.id} className="h-auto !flex">
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button type="button" className="events-carousel-control events-carousel-next" aria-label="Show next events">
            <Icon name="chevron-right" className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
