"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { FaqItem } from "@/types/site-content.types";

interface FaqAccordionItemProps {
  item: FaqItem;
}

/** One collapsible question/answer row in the FAQ accordion. */
export function FaqAccordionItem({ item }: FaqAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-bold text-text-primary sm:text-base">{item.question}</span>
        <Icon
          name="chevron-down"
          className={`h-5 w-5 shrink-0 text-accent-purple transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-6 text-text-secondary">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
