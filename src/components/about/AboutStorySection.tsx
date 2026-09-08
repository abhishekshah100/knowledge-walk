import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImageCollage } from "@/components/home/ImageCollage";
import { StoryQuoteCard } from "./StoryQuoteCard";
import { StoryValueChip } from "./StoryValueChip";
import type { AboutStoryContent } from "@/types/site-content.types";

interface AboutStorySectionProps {
  story: AboutStoryContent;
}

/**
 * About Us page's second section — "Our Story". Wrapped in the same
 * elevated `GlassCard` treatment used by the home page's major sections,
 * so it reads as a distinct, polished panel rather than a flat block on
 * the page background. An image collage sits beside the mission copy,
 * pull-quote and the three value chips; stacks to a single column below
 * `lg`.
 *
 * Each gap below its own content block (paragraphs, quote, badges) is a
 * deliberate individual margin rather than one shared parent `gap` —
 * that would force every gap in the column to the same size, when each
 * one needs its own value.
 */
export function AboutStorySection({ story }: AboutStorySectionProps) {
  return (
    <section className="relative bg-surface">
      <Container className="py-10 lg:py-12">
        <GlassCard className="p-5 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-6">
            <div className="mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
              <ImageCollage images={story.images} priority />
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                {story.badge}
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-[1.15] font-bold tracking-tight text-text-primary sm:text-4xl lg:text-[1.85rem] lg:whitespace-nowrap xl:text-3xl">
                {story.heading}
              </h2>

              <div className="mt-3 flex flex-col gap-3">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-text-primary/75 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-5 w-full">
                <StoryQuoteCard quote={story.quote} />
              </div>

              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                {story.values.map((value) => (
                  <StoryValueChip key={value.label} value={value} />
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
