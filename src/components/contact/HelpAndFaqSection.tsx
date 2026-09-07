import { Container } from "@/components/ui/Container";
import { HelpTopicCard } from "./HelpTopicCard";
import { FaqAccordionItem } from "./FaqAccordionItem";
import type { FaqContent, HowCanWeHelpContent } from "@/types/site-content.types";

interface HelpAndFaqSectionProps {
  howCanWeHelp: HowCanWeHelpContent;
  faq: FaqContent;
}

/**
 * Contact page's third section — "How Can We Help?" quick-topic tiles
 * followed by a "Frequently Asked Questions" accordion. The last section
 * on the page, so it owns both `pt` and `pb`.
 */
export function HelpAndFaqSection({ howCanWeHelp, faq }: HelpAndFaqSectionProps) {
  return (
    <section className="relative">
      <Container className="pt-[var(--space-section-mobile)] pb-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] md:pb-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)] lg:pb-[var(--space-section-desktop)]">
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-2xl font-extrabold tracking-tight text-accent-purple sm:text-3xl">
            {howCanWeHelp.heading}
          </h2>
          <p className="text-sm text-text-secondary sm:text-base">{howCanWeHelp.subtitle}</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {howCanWeHelp.topics.map((topic) => (
            <HelpTopicCard key={topic.title} topic={topic} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-4 sm:mt-14">
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-2xl font-extrabold tracking-tight text-accent-purple sm:text-3xl">
              {faq.heading}
            </h2>
            <p className="text-sm text-text-secondary sm:text-base">{faq.subtitle}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {faq.items.map((item) => (
            <FaqAccordionItem key={item.question} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
