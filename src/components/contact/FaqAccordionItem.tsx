import { Icon } from "@/components/ui/Icon";
import type { FaqItem } from "@/types/site-content.types";

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  /** Unique per item — used to build stable `id`/`aria-controls` pairs. */
  index: number;
}

/**
 * One question/answer row in the FAQ accordion. Fully controlled by the
 * parent so only one item is open at a time (see `HelpAndFaqSection`).
 */
export function FaqAccordionItem({ item, isOpen, onToggle, index }: FaqAccordionItemProps) {
  const buttonId = `faq-question-${index}`;
  const panelId = `faq-answer-${index}`;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-bold text-text-primary sm:text-base">{item.question}</span>
        <Icon
          name="chevron-down"
          className={`h-5 w-5 shrink-0 text-accent-purple transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-base leading-[1.6] text-text-secondary">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
