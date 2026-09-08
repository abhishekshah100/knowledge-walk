import Image from "next/image";
import type { ValueItem } from "@/types/site-content.types";

interface ValueCardProps {
  value: ValueItem;
}

/**
 * One "Knowledge / Integrity / Service / Inclusion / Heritage" value
 * tile. Every card shares one neutral border/background — the per-value
 * colour lives only on the icon itself (each icon asset is already
 * tinted in its own hue), not on the card frame. Icon-to-title and
 * title-to-description use their own (different) margins rather than
 * one shared gap, since the two need different spacing.
 */
export function ValueCard({ value }: ValueCardProps) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-surface p-5 text-center shadow-sm transition-shadow hover:shadow-md">
      <Image
        src={value.icon.src}
        alt=""
        width={40}
        height={40}
        sizes="40px"
        className="h-10 w-10 object-contain"
      />
      <h3 className="mt-2.5 text-base font-bold text-text-primary">{value.title}</h3>
      <p className="mt-2 text-xs leading-5 text-text-secondary sm:text-sm">{value.description}</p>
    </div>
  );
}
