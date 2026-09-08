"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { HelpTopicCard } from "./HelpTopicCard";
import { FaqAccordionItem } from "./FaqAccordionItem";
import type { FaqContent, HowCanWeHelpContent } from "@/types/site-content.types";

interface HelpAndFaqSectionProps {
  howCanWeHelp: HowCanWeHelpContent;
  faq: FaqContent;
  /** Called with a topic's `programOption` when its tile is clicked. */
  onTopicSelect?: (programOption: string) => void;
}

/**
 * Contact page's third section — "How Can We Help?" quick-topic tiles
 * followed by a "Frequently Asked Questions" accordion. The last section
 * on the page, so it owns both `pt` and `pb`.
 */
export function HelpAndFaqSection({ howCanWeHelp, faq, onTopicSelect }: HelpAndFaqSectionProps) {
  // Single-open accordion: all closed initially, opening one closes any other.
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section className="relative">
      <Container className="pt-[var(--space-section-mobile)] pb-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] md:pb-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)] lg:pb-[var(--space-section-desktop)]">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <span className="h-1 w-12 rounded-full bg-accent-purple" aria-hidden="true" />
          <h2 className="font-serif text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
            {howCanWeHelp.heading}
          </h2>
          <p className="text-sm text-text-secondary sm:text-base">{howCanWeHelp.subtitle}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {howCanWeHelp.topics.map((topic) => (
            <HelpTopicCard
              key={topic.title}
              topic={topic}
              onSelect={topic.programOption ? () => onTopicSelect?.(topic.programOption!) : undefined}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-center sm:mt-14 sm:items-start sm:text-left">
          <span className="h-1 w-12 rounded-full bg-accent-purple" aria-hidden="true" />
          <h2 className="font-serif text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
            {faq.heading}
          </h2>
          <p className="text-sm text-text-secondary sm:text-base">{faq.subtitle}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {faq.items.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openFaqIndex === index}
              onToggle={() => setOpenFaqIndex((current) => (current === index ? null : index))}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
