import { Container } from "@/components/ui/Container";
import type { IdeasInMotionContent } from "@/types/site-content.types";
import { ActivityCard } from "./ActivityCard";

interface IdeasInMotionSectionProps {
  ideasInMotion: IdeasInMotionContent;
}

/** A concise visual index of the six youth learning activities. */
export function IdeasInMotionSection({ ideasInMotion }: IdeasInMotionSectionProps) {
  return (
    <section aria-labelledby="ideas-in-motion-heading">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <h2
          id="ideas-in-motion-heading"
          className="text-center text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
        >
          {ideasInMotion.heading}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {ideasInMotion.items.map((activity) => (
            <ActivityCard key={activity.title} activity={activity} />
          ))}
        </div>
      </Container>
    </section>
  );
}
