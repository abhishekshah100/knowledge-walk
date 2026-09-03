import Image from "next/image";
import type { StatItem } from "@/types/site-content.types";

interface MetricItemProps {
  stat: StatItem;
}

/**
 * One impact metric's content (glossy icon + value + label). Deliberately
 * has no card/border of its own — `StatsSection` renders all metrics
 * inside one shared panel, divided by hairlines rather than gaps between
 * cards.
 */
export function MetricItem({ stat }: MetricItemProps) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-1 text-center sm:gap-2">
      <Image
        src={stat.image.src}
        alt={stat.image.alt}
        width={stat.image.width}
        height={stat.image.height}
        sizes="(min-width: 640px) 80px, 36px"
        className="h-9 w-9 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
      />
      <span className="text-base font-bold text-primary sm:text-2xl lg:text-4xl">{stat.value}</span>
      <span className="max-w-full text-xs leading-tight font-medium text-text-secondary sm:whitespace-nowrap sm:text-sm">{stat.label}</span>
    </div>
  );
}
