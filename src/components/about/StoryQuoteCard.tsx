import { Icon } from "@/components/ui/Icon";
import type { StoryQuote } from "@/types/site-content.types";

interface StoryQuoteCardProps {
  quote: StoryQuote;
}

/** The light, tinted pull-quote card inside "Our Story" — kept compact rather than a tall block. */
export function StoryQuoteCard({ quote }: StoryQuoteCardProps) {
  return (
    <div className="rounded-2xl bg-surface-muted p-3">
      <div className="flex items-start gap-2">
        <Icon name="quote" className="mt-1 h-4 w-4 shrink-0 text-primary/50" />
        <p className="font-serif text-base leading-relaxed text-text-primary italic sm:text-lg">{quote.quote}</p>
      </div>
      <p className="mt-1 pl-6 text-sm font-semibold text-primary">— {quote.attribution}</p>
    </div>
  );
}
