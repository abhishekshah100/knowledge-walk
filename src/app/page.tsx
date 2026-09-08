"use client";

import { BuildingLeadersSection } from "@/components/home/BuildingLeadersSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeritageConclavesSection } from "@/components/home/HeritageConclavesSection";
import { HeroSlider } from "@/components/home/HeroSlider";
import { IdeasInMotionSection } from "@/components/home/IdeasInMotionSection";
import { KnowledgeWalkInActionSection } from "@/components/home/KnowledgeWalkInActionSection";
import { MissionIasSection } from "@/components/home/MissionIasSection";
import { PillarProjectsSection } from "@/components/home/PillarProjectsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { UpcomingEventsSection } from "@/components/home/UpcomingEventsSection";
import { VoicesOfChangeSection } from "@/components/home/VoicesOfChangeSection";
import { useHomePageData } from "@/components/layout/HomeDataProvider";
import { Container, ErrorState, PageLoader } from "@/components/ui";

/**
 * Home page.
 *
 * Each section reads its slice of the content returned by the same fetched
 * `data` object, including activities and upcoming events.
 */
export default function HomePage() {
  const { data, isLoading, error } = useHomePageData();

  if (isLoading) {
    return (
      <main className="flex-1">
        <PageLoader />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1">
        <Container className="py-[var(--space-section-mobile)] md:py-[var(--space-section-tablet)] lg:py-[var(--space-section-desktop)]">
          <ErrorState message={error} />
        </Container>
      </main>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
      <HeroSlider hero={data.home.hero} />
      <PillarProjectsSection pillarProjects={data.home.pillarProjects} />
      <BuildingLeadersSection buildingLeaders={data.home.buildingLeaders} />
      <MissionIasSection missionIas={data.home.missionIas} />
      <HeritageConclavesSection heritageConclave={data.home.heritageConclave} />
      <IdeasInMotionSection ideasInMotion={data.home.ideasInMotion} />
      <UpcomingEventsSection events={data.events} />
      <VoicesOfChangeSection stories={data.stories} />
      <StatsSection stats={data.home.stats} />
      <KnowledgeWalkInActionSection media={data.media} />
      <FinalCtaSection finalCta={data.home.finalCta} />
    </main>
  );
}
