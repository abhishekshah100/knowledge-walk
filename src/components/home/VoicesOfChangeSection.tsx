"use client";

import { A11y, Keyboard, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { StoriesContent } from "@/types/site-content.types";
import { VoiceCard } from "./VoiceCard";

interface VoicesOfChangeSectionProps {
  stories: StoriesContent;
}

/** Participant stories with Swiper-provided touch, keyboard, arrows and pagination. */
export function VoicesOfChangeSection({ stories }: VoicesOfChangeSectionProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section aria-labelledby="voices-of-change-heading">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <h2 id="voices-of-change-heading" className="text-center text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {stories.heading}
        </h2>
        <div className="voices-carousel relative mx-auto mt-5 max-w-[1240px] px-10 pb-8 sm:px-12">
          <button type="button" onClick={() => swiperRef.current?.slidePrev()} className="voices-carousel-control voices-carousel-prev !inline-flex" aria-label="Show previous voices" title="Previous voices">
            <Icon name="chevron-left" className="h-4 w-4" />
          </button>
          <Swiper
            className="voices-swiper"
            modules={[A11y, Keyboard, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            speed={450}
            loop
            watchOverflow={false}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            a11y={{ enabled: true, prevSlideMessage: "Show previous voices", nextSlideMessage: "Show next voices" }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {stories.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto !flex">
                <VoiceCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button type="button" onClick={() => swiperRef.current?.slideNext()} className="voices-carousel-control voices-carousel-next !inline-flex" aria-label="Show next voices" title="Next voices">
            <Icon name="chevron-right" className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
