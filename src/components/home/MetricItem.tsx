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
    <div className="flex min-w-0 flex-col items-center gap-1 text-center">
      <div className="flex items-center justify-center rounded-full bg-gradient-to-tr from-primary/10 to-primary/5 p-1.5 sm:p-2">
        <Image
          src={stat.image.src}
          alt={stat.image.alt}
          width={stat.image.width}
          height={stat.image.height}
          sizes="(min-width: 640px) 80px, 36px"
          className="h-6 w-6 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
        />
      </div>
      <span className="mt-1 text-base font-semibold text-primary sm:text-2xl lg:text-4xl tracking-tight">{stat.value}</span>
      <span className="max-w-full text-xs leading-tight font-medium text-text-secondary sm:text-sm">{stat.label}</span>
    </div>
  );
}
