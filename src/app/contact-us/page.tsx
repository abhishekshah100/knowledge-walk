"use client";

import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { HelpAndFaqSection } from "@/components/contact/HelpAndFaqSection";
import { OfficeLocationSection } from "@/components/contact/OfficeLocationSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container, ErrorState, LoadingSkeleton } from "@/components/ui";
import { useContactPageData } from "@/hooks/useContactPageData";
import { useHomePageData } from "@/hooks/useHomePageData";

/**
 * Contact Us page.
 *
 * Header/Footer read the same shared `/api/home` navigation payload as
 * every other page; the page body reads its own `/api/contact` payload.
 */
export default function ContactPage() {
  const { data: homeData, isLoading: isHomeLoading, error: homeError } = useHomePageData();
  const { data: contactData, isLoading: isContactLoading, error: contactError } = useContactPageData();

  const isLoading = isHomeLoading || isContactLoading;
  const error = homeError ?? contactError;

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

  if (!homeData || !contactData) {
    return null;
  }

  return (
    <>
      <Header navigation={homeData.navigation} />
      <main className="flex-1">
        <ContactHeroSection contactHero={contactData.contactHero} />
        <OfficeLocationSection officeLocation={contactData.officeLocation} />
        <HelpAndFaqSection howCanWeHelp={contactData.howCanWeHelp} faq={contactData.faq} />
      </main>
      <Footer navigation={homeData.navigation} />
    </>
  );
}
