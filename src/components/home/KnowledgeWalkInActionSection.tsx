import { Container } from "@/components/ui/Container";
import type { MediaContent } from "@/types/site-content.types";
import { ActionMediaCard } from "./ActionMediaCard";

interface KnowledgeWalkInActionSectionProps {
  media: MediaContent;
}

/** Responsive, static visual record of Knowledge Walk activities. */
export function KnowledgeWalkInActionSection({ media }: KnowledgeWalkInActionSectionProps) {
  const { gallery } = media;

  return (
    <section aria-labelledby="knowledge-walk-action-heading" className="bg-surface-muted">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <div className="grid gap-6 lg:grid-cols-[15rem_1fr] lg:items-center lg:gap-8">
          <div className="mx-auto max-w-sm text-center lg:mx-0 lg:text-left">
            <h2 id="knowledge-walk-action-heading" className="text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-3xl">{gallery.heading}</h2>
            <span className="mx-auto mt-3 block h-0.5 w-12 rounded-full bg-primary lg:mx-0" aria-hidden="true" />
            <p className="mt-3 text-sm leading-6 text-text-secondary lg:border-l-2 lg:border-primary/50 lg:pl-3">{gallery.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {gallery.items.map((item) => (
              <ActionMediaCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
