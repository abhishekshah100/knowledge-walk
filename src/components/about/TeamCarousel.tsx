"use client";

import { useRef } from "react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Icon } from "@/components/ui/Icon";
import { TeamMemberCard } from "./TeamMemberCard";
import type { TeamMember } from "@/types/site-content.types";

interface TeamCarouselProps {
  members: TeamMember[];
  cardsPerRow: number;
}

/**
 * The Swiper-based carousel path for "Our Team" — split into its own
 * module (dynamically imported by `OurTeamSection`) purely so Swiper's JS
 * and CSS are only ever fetched when there are actually more members than
 * fit in one row. With 4 or fewer members (the static-grid path in
 * `OurTeamSection`), this file — and its `swiper/css` imports — is never
 * loaded at all: previously the CSS was imported unconditionally at the
 * top of `OurTeamSection`, so the browser preloaded it on every About page
 * visit even though the carousel (and thus that CSS) never rendered,
 * producing a "preloaded but not used" console warning.
 */
export function TeamCarousel({ members, cardsPerRow }: TeamCarouselProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="team-carousel relative mx-auto mt-6 max-w-[1240px] px-10 pb-8 sm:px-12">
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="team-carousel-control team-carousel-prev !inline-flex"
        aria-label="Show previous team member"
        title="Previous team member"
      >
        <Icon name="chevron-left" className="h-4 w-4" />
      </button>
      <Swiper
        className="team-swiper"
        modules={[A11y, Keyboard, Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        speed={450}
        loop
        watchOverflow={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{ enabled: true, prevSlideMessage: "Show previous team member", nextSlideMessage: "Show next team member" }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: cardsPerRow, spaceBetween: 20 },
        }}
      >
        {members.map((member) => (
          <SwiperSlide key={member.name} className="h-auto !flex">
            <TeamMemberCard member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="team-carousel-control team-carousel-next !inline-flex"
        aria-label="Show next team member"
        title="Next team member"
      >
        <Icon name="chevron-right" className="h-4 w-4" />
      </button>
    </div>
  );
}
