import { Container } from "@/components/ui/Container";
import { ConnectWithUsPanel } from "./ConnectWithUsPanel";
import { ContactFormPanel } from "./ContactFormPanel";
import type { ContactHeroContent } from "@/types/site-content.types";

interface ContactHeroSectionProps {
  contactHero: ContactHeroContent;
}

/**
 * First section of the Contact Us page — "Connect With Us" channels on
 * the left, the enquiry form on the right. Stacks to a single column
 * below `lg`.
 */
export function ContactHeroSection({ contactHero }: ContactHeroSectionProps) {
  return (
    <section className="relative">
      <Container className="grid gap-10 pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:grid-cols-2 lg:items-start lg:gap-12 lg:pt-[var(--space-section-desktop)]">
        <ConnectWithUsPanel contactHero={contactHero} />
        <ContactFormPanel form={contactHero.form} />
      </Container>
    </section>
  );
}
