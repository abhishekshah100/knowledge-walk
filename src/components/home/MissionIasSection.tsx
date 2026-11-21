import Image from "next/image";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import type { MissionIasContent } from "@/types/site-content.types";

interface MissionIasSectionProps {
  missionIas: MissionIasContent;
}

/**
 * "Mission IAS 2026" — program overview, key facts and CTAs beside the
 * preparation image. Stacks to a single column below `lg`.
 */
export function MissionIasSection({ missionIas }: MissionIasSectionProps) {
  return (
    <section id="mission-ias-2026" className="relative scroll-mt-24">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <GlassCard className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-start gap-3">
              <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-primary">
                {missionIas.eyebrow}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {missionIas.heading}
              </h2>
            </div>

            <div className="relative isolate mt-7 grid min-w-0 gap-5 lg:grid-cols-5 lg:items-stretch lg:gap-6">
              <div className="relative z-0 min-w-0 aspect-[16/10] overflow-hidden rounded-2xl border border-border/70 bg-surface shadow-md lg:col-span-2 lg:aspect-auto lg:min-h-[19rem]">
                <Image
                  src={missionIas.image.src}
                  alt={missionIas.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 flex min-w-0 flex-col gap-4 lg:col-span-3">
                <dl className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
                  {missionIas.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex min-w-0 min-h-32 flex-col justify-between rounded-2xl border border-white/10 bg-text-primary p-4 text-text-inverse shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:min-h-36 sm:p-5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-primary-light">
                        <Icon name={fact.icon} className="h-5 w-5" />
                      </span>
                      <div className="mt-4">
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
                          {fact.value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-6 max-w-5xl space-y-3 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
              {missionIas.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button href={missionIas.primaryCta.href}>{missionIas.primaryCta.label}</Button>
              <JoinMovementButton label={missionIas.secondaryCta.label} variant="outline" />
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
