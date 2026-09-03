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
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container, ErrorState, LoadingSkeleton } from "@/components/ui";
import { useHomePageData } from "@/hooks/useHomePageData";

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
        <Container className="flex flex-col gap-3 py-[var(--space-section-mobile)] md:py-[var(--space-section-tablet)] lg:py-[var(--space-section-desktop)]">
          <LoadingSkeleton className="h-8 w-1/2" />
          <LoadingSkeleton className="h-4 w-full" />
          <LoadingSkeleton className="h-4 w-3/4" />
        </Container>
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
    <>
      <Header navigation={data.navigation} />
      <main className="flex-1">
        <HeroSlider hero={data.home.hero} />
        <StatsSection stats={data.home.stats} />
        <PillarProjectsSection pillarProjects={data.home.pillarProjects} />
        <BuildingLeadersSection buildingLeaders={data.home.buildingLeaders} />
        <MissionIasSection missionIas={data.home.missionIas} />
        <HeritageConclavesSection heritageConclave={data.home.heritageConclave} />
        <IdeasInMotionSection ideasInMotion={data.home.ideasInMotion} />
        <UpcomingEventsSection events={data.events} />
        <VoicesOfChangeSection stories={data.stories} />
        <KnowledgeWalkInActionSection media={data.media} />
        <FinalCtaSection finalCta={data.home.finalCta} />
      </main>
      <Footer navigation={data.navigation} />
    </>
  );
}
