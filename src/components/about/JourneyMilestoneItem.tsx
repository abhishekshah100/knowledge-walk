import Image from "next/image";
import type { JourneyMilestone } from "@/types/site-content.types";

interface JourneyMilestoneItemProps {
  milestone: JourneyMilestone;
}

/**
 * One "The Beginning / First Conversations / ..." step in the journey
 * path. Below `lg` it's a horizontal row (icon left, text right) reading
 * top-to-bottom as a vertical timeline; at `lg:` and up it switches to
 * icon-on-top, centered, reading left-to-right. The icon assets are
 * already complete, polished circular badges (their own gradient
 * background + glyph baked in) — rendered directly, not shrunk down
 * inside another flat wrapper circle.
 */
export function JourneyMilestoneItem({ milestone }: JourneyMilestoneItemProps) {
  return (
    <li className="relative z-10 flex items-start gap-4 text-left lg:flex-col lg:items-center lg:gap-3 lg:text-center">
      <Image
        src={milestone.icon.src}
        alt=""
        width={80}
        height={80}
        sizes="80px"
        className="h-16 w-16 shrink-0 object-contain drop-shadow-md lg:h-20 lg:w-20"
      />
      <div className="min-w-0 flex-1 lg:flex-none">
        <h3 className="text-sm font-bold text-text-primary sm:text-base">{milestone.title}</h3>
        <p className="mt-2 text-sm leading-6 text-text-secondary">{milestone.description}</p>
      </div>
    </li>
  );
}
