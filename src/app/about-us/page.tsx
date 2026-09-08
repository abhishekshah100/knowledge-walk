"use client";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { OurJourneySection } from "@/components/about/OurJourneySection";
import { OurTeamSection } from "@/components/about/OurTeamSection";
import { OurValuesSection } from "@/components/about/OurValuesSection";
import { Container, ErrorState, PageLoader } from "@/components/ui";
import { useAboutPageData } from "@/hooks/useAboutPageData";

/**
 * About Us page.
 *
 * Header/Footer are rendered once by `HomeDataProvider` in the root
 * layout, not here — only this page's own `/api/about` payload is
 * fetched and rendered as the routed page body.
 */
export default function AboutPage() {
  const { data: aboutData, isLoading, error } = useAboutPageData();

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

  if (!aboutData) {
    return null;
  }

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
      <AboutHeroSection hero={aboutData.hero} />
      <AboutStorySection story={aboutData.story} />
      <OurValuesSection values={aboutData.values} />
      <OurJourneySection journey={aboutData.journey} />
      <OurTeamSection team={aboutData.team} />
    </main>
  );
}
