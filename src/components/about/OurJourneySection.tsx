import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { JourneyPath } from "./JourneyPath";
import type { OurJourneyContent } from "@/types/site-content.types";

interface OurJourneySectionProps {
  journey: OurJourneyContent;
}

/**
 * About Us page's fourth (currently last) section — "Our Journey".
 * Wrapped in the same elevated `GlassCard` treatment as "Our Story", so
 * the milestone path and photo sit on a distinct, premium panel instead
 * of floating bare on the page background. Both sides are stretched to
 * equal height, the path vertically centered within it. Stacks to a
 * single column below `lg`. Anchored by `#our-journey` so the hero's
 * "Discover Our Journey" button can jump straight to it.
 */
export function OurJourneySection({ journey }: OurJourneySectionProps) {
  return (
    <section id="our-journey" className="relative scroll-mt-24 bg-surface">
      <Container className="py-10 lg:py-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            {journey.badge}
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {journey.heading}
          </h2>
          <p className="max-w-lg text-sm text-text-secondary sm:text-base">{journey.subtitle}</p>
        </div>

        <GlassCard className="mt-6 p-5 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-8">
            <div className="order-2 flex items-center lg:order-1">
              <JourneyPath milestones={journey.milestones} />
            </div>

            <div className="order-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 lg:order-2">
              <Image
                src={journey.image.src}
                alt={journey.image.alt}
                width={journey.image.width ?? 960}
                height={journey.image.height ?? 471}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="aspect-[960/471] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
