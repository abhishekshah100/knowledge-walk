"use client";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { OurJourneySection } from "@/components/about/OurJourneySection";
import { OurTeamSection } from "@/components/about/OurTeamSection";
import { OurValuesSection } from "@/components/about/OurValuesSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container, ErrorState, LoadingSkeleton } from "@/components/ui";
import { useAboutPageData } from "@/hooks/useAboutPageData";
import { useHomePageData } from "@/hooks/useHomePageData";

/**
 * About Us page.
 *
 * Header/Footer read the same shared `/api/home` navigation payload as
 * every other page; the page body reads its own `/api/about` payload.
 */
export default function AboutPage() {
  const { data: homeData, isLoading: isHomeLoading, error: homeError } = useHomePageData();
  const { data: aboutData, isLoading: isAboutLoading, error: aboutError } = useAboutPageData();

  const isLoading = isHomeLoading || isAboutLoading;
  const error = homeError ?? aboutError;

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

  if (!homeData || !aboutData) {
    return null;
  }

  return (
    <>
      <Header navigation={homeData.navigation} />
      <main className="flex-1">
        <AboutHeroSection hero={aboutData.hero} />
        <AboutStorySection story={aboutData.story} />
        <OurValuesSection values={aboutData.values} />
        <OurJourneySection journey={aboutData.journey} />
        <OurTeamSection team={aboutData.team} />
      </main>
      <Footer navigation={homeData.navigation} />
    </>
  );
}
