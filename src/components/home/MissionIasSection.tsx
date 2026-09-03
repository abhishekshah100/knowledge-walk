import Image from "next/image";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { MissionStepList } from "./MissionStepList";
import type { MissionIasContent } from "@/types/site-content.types";

interface MissionIasSectionProps {
  missionIas: MissionIasContent;
}

/**
 * "Mission IAS 2026" — flagship label, mission copy, the four-stage
 * stepper and two CTAs beside the preparation image. Stacks to a single
 * column below `lg`.
 */
export function MissionIasSection({ missionIas }: MissionIasSectionProps) {
  return (
    <section id="mission-ias-2026" className="relative scroll-mt-24">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <GlassCard className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="flex flex-col gap-4">
              <span className="w-fit self-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary lg:self-start">
                {missionIas.eyebrow}
              </span>
              <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl lg:text-left">{missionIas.heading}</h2>
              <p className="text-center text-sm text-text-secondary sm:text-base lg:text-left">{missionIas.description}</p>

              <div className="overflow-hidden rounded-lg shadow-sm lg:hidden">
                <Image
                  src={missionIas.image.src}
                  alt={missionIas.image.alt}
                  width={missionIas.image.width ?? 1200}
                  height={missionIas.image.height ?? 800}
                  sizes="90vw"
                  className="h-auto w-full object-cover"
                />
              </div>

              <MissionStepList steps={missionIas.steps} />

              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button href={missionIas.primaryCta.href}>{missionIas.primaryCta.label}</Button>
                <JoinMovementButton label={missionIas.secondaryCta.label} variant="outline" />
              </div>
            </div>

            <div className="hidden overflow-hidden rounded-2xl shadow-lg lg:block">
              <Image
                src={missionIas.image.src}
                alt={missionIas.image.alt}
                width={missionIas.image.width ?? 1200}
                height={missionIas.image.height ?? 800}
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
