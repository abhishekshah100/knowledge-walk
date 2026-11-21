import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { OurTeamContent } from "@/types/site-content.types";

interface OurTeamSectionProps {
  team: OurTeamContent;
}

/** About Us page's director message, anchored by `#our-team`. */
export function OurTeamSection({ team }: OurTeamSectionProps) {
  return (
    <section id="our-team" className="relative scroll-mt-24 bg-background">
      <Container className="py-12 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {team.heading}
          </h2>
          <article className="relative mt-6 overflow-hidden rounded-3xl border border-border bg-surface shadow-md">
            <div className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon name="quote" className="h-5 w-5" />
                </span>
                <blockquote className="min-w-0 space-y-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                  {team.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </blockquote>
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-serif text-base font-semibold text-text-primary">{team.signoff}</p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {team.directors.map((director) => (
                    <div key={director.name} className="border-l-2 border-accent-gold pl-4">
                      <p className="font-serif text-lg font-bold text-text-primary">{director.name}</p>
                      <p className="mt-1 text-sm font-medium text-primary">{director.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
