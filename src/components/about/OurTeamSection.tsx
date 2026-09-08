"use client";

import { useRef } from "react";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { TeamMemberCard } from "./TeamMemberCard";
import type { OurTeamContent } from "@/types/site-content.types";

interface OurTeamSectionProps {
  team: OurTeamContent;
}

/** One row fits exactly 4 cards at `lg:` — beyond that, a swiper takes over instead of wrapping awkwardly. */
const CARDS_PER_ROW = 4;

/**
 * About Us page's fifth (currently last) section — "Our Team". Four or
 * fewer members render as a plain static grid (one row on desktop); more
 * than that switches to the same Swiper carousel pattern used by
 * `VoicesOfChangeSection`/`UpcomingEventsSection` — auto-advancing every
 * second on both desktop and mobile, same as that carousel — so the page
 * never shows an awkward half-empty last row. Anchored by `#our-team` so
 * the hero's "Meet Our Team" link can jump straight to it.
 */
export function OurTeamSection({ team }: OurTeamSectionProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const needsCarousel = team.members.length > CARDS_PER_ROW;

  return (
    <section id="our-team" className="relative scroll-mt-24 bg-background">
      <Container className="py-12 lg:py-14">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            {team.badge}
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {team.heading}
          </h2>
          <p className="max-w-xl text-sm text-text-secondary sm:text-base">{team.subtitle}</p>
        </div>

        {needsCarousel ? (
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
                1024: { slidesPerView: CARDS_PER_ROW, spaceBetween: 20 },
              }}
            >
              {team.members.map((member) => (
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
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.members.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
