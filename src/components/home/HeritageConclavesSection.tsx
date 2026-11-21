import Image from "next/image";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import type { HeritageConclaveContent } from "@/types/site-content.types";

interface HeritageConclavesSectionProps {
  heritageConclave: HeritageConclaveContent;
}

/**
 * "Heritage Conclaves" — heading, image, overview and CTA.
 */
export function HeritageConclavesSection({ heritageConclave }: HeritageConclavesSectionProps) {
  return (
    <section id="heritage-conclaves" className="relative scroll-mt-24">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <GlassCard className="p-4 sm:p-6 lg:p-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-center text-2xl font-bold tracking-tight text-text-primary sm:text-3xl lg:text-left">
              {heritageConclave.heading}
            </h2>
          </div>
          <div className="grid min-w-0 gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div className="relative aspect-[3/2] min-w-0 overflow-hidden rounded-2xl border border-border/70 bg-surface shadow-lg">
              <Image
                src={heritageConclave.image.src}
                alt={heritageConclave.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-col gap-5">
              <div className="space-y-4 text-sm leading-6 text-text-secondary sm:text-base sm:leading-7">
                {heritageConclave.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="flex justify-center pt-1">
                <JoinMovementButton label={heritageConclave.cta.label} className="w-fit" />
              </div>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
