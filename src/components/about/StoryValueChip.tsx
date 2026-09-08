import Image from "next/image";
import type { StoryValue } from "@/types/site-content.types";

interface StoryValueChipProps {
  value: StoryValue;
}

/**
 * One "Learn Deeply / Lead Responsibly / Serve Meaningfully" badge.
 * Purely informational (not a link), so it's styled as a pill/chip
 * rather than link-colored text, which would otherwise suggest it's
 * clickable.
 */
export function StoryValueChip({ value }: StoryValueChipProps) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-primary/10 py-1.5 pr-4 pl-2">
      <Image src={value.icon.src} alt="" width={20} height={20} sizes="20px" className="h-5 w-5 object-contain" />
      <span className="text-xs font-semibold text-text-primary sm:text-sm">{value.label}</span>
    </div>
  );
}
