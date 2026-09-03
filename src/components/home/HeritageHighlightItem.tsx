import Image from "next/image";
import type { HeritageHighlight } from "@/types/site-content.types";

interface HeritageHighlightItemProps {
  highlight: HeritageHighlight;
}

/** One "Culture & Identity / Living Traditions / Ideas Across Generations" row. */
export function HeritageHighlightItem({ highlight }: HeritageHighlightItemProps) {
  return (
    <div className="flex gap-4 py-4 first:pt-0 last:pb-0">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-accent-gold/20 bg-accent-gold/10 p-2 shadow-sm">
        <Image src={highlight.icon.src} alt={highlight.icon.alt} width={40} height={40} sizes="40px" className="h-10 w-10 object-contain" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 pt-1">
        <h4 className="text-sm font-bold text-accent-gold">{highlight.title}</h4>
        <p className="text-xs leading-snug text-text-secondary">{highlight.description}</p>
      </div>
    </div>
  );
}
