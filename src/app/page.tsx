import { Suspense } from "react";
// import { BuildingLeadersSection } from "@/components/home/BuildingLeadersSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeritageConclavesSection } from "@/components/home/HeritageConclavesSection";
import { HeroSlider } from "@/components/home/HeroSlider";
// import { IdeasInMotionSection } from "@/components/home/IdeasInMotionSection";
// import { KnowledgeWalkInActionSection } from "@/components/home/KnowledgeWalkInActionSection";
import { MissionIasSection } from "@/components/home/MissionIasSection";
import { PillarProjectsSection } from "@/components/home/PillarProjectsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { VoicesOfChangeSection } from "@/components/home/VoicesOfChangeSection";
import { LoadingSkeleton } from "@/components/ui";
import { getHomePageData } from "@/services/home.service";

const SECTION_PADDING =
  "py-[var(--space-section-mobile)] md:py-[var(--space-section-tablet)] lg:py-[var(--space-section-desktop)]";

/**
 * Home page.
 *
 * Server-rendered: `getHomePageData()` is cached (see
 * `src/services/home.service.ts`), and the root layout already calls it for
 * the site nav, so this call reuses that same cache entry instead of
 * refetching.
 *
 * `UpcomingEventsSection` and `VoicesOfChangeSection` use Swiper's `A11y`/
 * `Autoplay` modules, which read `new Date()` as soon as they mount — a
 * non-deterministic value Next.js won't allow inside the static prerender.
 * Wrapping them in `<Suspense>` excludes just those two sections from the
 * static shell (per https://nextjs.org/docs/messages/blocking-prerender-current-time-client)
 * instead of forcing the whole page to render dynamically on every request.
 */
export default async function HomePage() {
  const { home, events, stories, media } = await getHomePageData();

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
      <HeroSlider hero={home.hero} />
      <StatsSection stats={home.stats} />
      <VoicesOfChangeSection stories={stories} />
      <PillarProjectsSection pillarProjects={home.pillarProjects} />
      {/* <BuildingLeadersSection buildingLeaders={home.buildingLeaders} /> */}
      <MissionIasSection missionIas={home.missionIas} />
      <HeritageConclavesSection heritageConclave={home.heritageConclave} />
      {/* <IdeasInMotionSection ideasInMotion={home.ideasInMotion} /> */}
      <Suspense fallback={<LoadingSkeleton className={`h-[520px] w-full ${SECTION_PADDING}`} />}>
        <UpcomingEventsSection events={events} />
      </Suspense>
      {/* <KnowledgeWalkInActionSection media={media} /> */}
      <FinalCtaSection finalCta={home.finalCta} />
    </main>
  );
}
