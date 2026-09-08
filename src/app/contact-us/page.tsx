"use client";

import { useState } from "react";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { HelpAndFaqSection } from "@/components/contact/HelpAndFaqSection";
import { OfficeLocationSection } from "@/components/contact/OfficeLocationSection";
import { Container, ErrorState, PageLoader } from "@/components/ui";
import { useContactPageData } from "@/hooks/useContactPageData";

/**
 * Contact Us page.
 *
 * Header/Footer are rendered once by `HomeDataProvider` in the root
 * layout, not here — only this page's own `/api/contact` payload is
 * fetched and rendered as the routed page body.
 */
export default function ContactPage() {
  const { data: contactData, isLoading, error } = useContactPageData();
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  function handleTopicSelect(programOption: string) {
    setSelectedProgram(programOption);
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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

  if (!contactData) {
    return null;
  }

  return (
    <main className="flex-1">
      <ContactHeroSection contactHero={contactData.contactHero} initialProgram={selectedProgram} />
      <OfficeLocationSection officeLocation={contactData.officeLocation} />
      <HelpAndFaqSection howCanWeHelp={contactData.howCanWeHelp} faq={contactData.faq} onTopicSelect={handleTopicSelect} />
    </main>
  );
}
