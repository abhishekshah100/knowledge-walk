import { JourneyMilestoneItem } from "./JourneyMilestoneItem";
import type { JourneyMilestone } from "@/types/site-content.types";

interface JourneyPathProps {
  milestones: JourneyMilestone[];
}

/**
 * Below `lg`: a vertical timeline — milestones stacked top-to-bottom,
 * connected by a vertical line running through each icon's horizontal
 * center (`left-8` = half of the mobile icon's `h-16`/64px width).
 *
 * At `lg:` and up: four milestones in a row, connected by a horizontal
 * line through each icon's center instead. Uses an explicit 4-column
 * grid rather than a `flex justify-between` row: with `justify-between`,
 * each item's actual rendered width is driven by its own (wider)
 * title/description text, not the icon, so a fixed pixel inset for the
 * line never lines up correctly with where the icon actually sits. With
 * 4 equal grid columns, an icon centered within its column always sits
 * at a fixed fraction of the total width regardless of text width —
 * column N of 4 is centered at (2N-1)/8 — so the line spans from the
 * first column's center (1/8 = 12.5%) to the last column's center (7/8
 * = 87.5%), i.e. a 12.5% inset on each side, with no dependency on icon
 * size or text length.
 */
export function JourneyPath({ milestones }: JourneyPathProps) {
  return (
    <ol className="relative flex flex-col gap-8 before:absolute before:top-8 before:bottom-8 before:left-8 before:w-[3px] before:rounded-full before:bg-gradient-to-b before:from-primary/45 before:via-accent-purple/45 before:to-primary/45 before:content-[''] lg:grid lg:grid-cols-4 lg:items-start lg:gap-0 lg:before:top-10 lg:before:bottom-auto lg:before:left-[12.5%] lg:before:h-1 lg:before:w-auto lg:before:right-[12.5%] lg:before:bg-gradient-to-r">
      {milestones.map((milestone) => (
        <JourneyMilestoneItem key={milestone.title} milestone={milestone} />
      ))}
    </ol>
  );
}
