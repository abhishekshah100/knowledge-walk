import Image from "next/image";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeritageHighlightItem } from "./HeritageHighlightItem";
import type { HeritageConclaveContent } from "@/types/site-content.types";

interface HeritageConclavesSectionProps {
  heritageConclave: HeritageConclaveContent;
}

/**
 * "Heritage Conclaves" — mission copy and CTA, the main image, and the
 * three highlights, side by side on desktop and stacked on mobile.
 */
export function HeritageConclavesSection({ heritageConclave }: HeritageConclavesSectionProps) {
  return (
    <section id="heritage-conclaves" className="relative scroll-mt-24">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <GlassCard className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-center lg:gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-center text-2xl font-bold text-text-primary sm:text-3xl lg:text-left">{heritageConclave.heading}</h2>
              <p className="text-sm text-text-secondary sm:text-base">{heritageConclave.description}</p>
              <div className="hidden lg:flex lg:justify-center">
                <JoinMovementButton label={heritageConclave.cta.label} className="w-fit" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={heritageConclave.image.src}
                alt={heritageConclave.image.alt}
                width={heritageConclave.image.width ?? 1200}
                height={heritageConclave.image.height ?? 800}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="divide-y divide-border rounded-lg border border-border bg-surface/85 p-5 shadow-sm">
              {heritageConclave.highlights.map((highlight) => (
                <HeritageHighlightItem key={highlight.title} highlight={highlight} />
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-6 lg:hidden">
            <JoinMovementButton label={heritageConclave.cta.label} />
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
