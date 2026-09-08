import { Container } from "@/components/ui/Container";
import { ConnectWithUsPanel } from "./ConnectWithUsPanel";
import { ContactFormPanel } from "./ContactFormPanel";
import type { ContactHeroContent } from "@/types/site-content.types";

interface ContactHeroSectionProps {
  contactHero: ContactHeroContent;
  /** Preselects this label in the form's "Program interest" field. */
  initialProgram?: string;
}

/**
 * First section of the Contact Us page — "Connect With Us" channels on
 * the left, the enquiry form on the right. Stacks to a single column
 * below `lg`.
 */
export function ContactHeroSection({ contactHero, initialProgram }: ContactHeroSectionProps) {
  return (
    <section className="relative">
      <Container className="grid grid-cols-1 gap-10 pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:grid-cols-2 lg:items-start lg:gap-12 lg:pt-[var(--space-section-desktop)]">
        <ConnectWithUsPanel contactHero={contactHero} />
        <ContactFormPanel form={contactHero.form} initialProgram={initialProgram} />
      </Container>
    </section>
  );
}
