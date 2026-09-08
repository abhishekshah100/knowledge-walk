"use client";

import { lazy, Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { TeamMemberCard } from "./TeamMemberCard";
import type { OurTeamContent } from "@/types/site-content.types";

interface OurTeamSectionProps {
  team: OurTeamContent;
}

/** One row fits exactly 4 cards at `lg:` — beyond that, a swiper takes over instead of wrapping awkwardly. */
const CARDS_PER_ROW = 4;

/**
 * Swiper (JS + CSS) is only ever needed once there are more members than
 * fit in one row — lazily imported so the static-grid path (today's 4
 * members) never fetches it at all. Plain `React.lazy` rather than
 * `next/dynamic`: Next.js proactively emits a `<link rel="preload">` for a
 * `next/dynamic` chunk's CSS the moment it's referenced anywhere in the
 * module graph, regardless of whether the runtime condition below ever
 * actually renders it — which is exactly what triggered the browser's
 * "preloaded but not used" warning even after switching away from a
 * top-level `import "swiper/css"`. `React.lazy` code-splits the same way
 * without that automatic preload hint, so the chunk (CSS included) is only
 * fetched when `needsCarousel` is actually true.
 */
const TeamCarousel = lazy(() => import("./TeamCarousel").then((mod) => ({ default: mod.TeamCarousel })));

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
          <Suspense fallback={null}>
            <TeamCarousel members={team.members} cardsPerRow={CARDS_PER_ROW} />
          </Suspense>
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
