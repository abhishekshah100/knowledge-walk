import Image from "next/image";
import { JoinMovementButton } from "@/components/enquiry/JoinMovementButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { FinalCtaContent } from "@/types/site-content.types";

interface FinalCtaSectionProps {
  finalCta: FinalCtaContent;
}

/** Spacious final invitation, with API-provided copy, links and journey artwork. */
export function FinalCtaSection({ finalCta }: FinalCtaSectionProps) {
  return (
    <section aria-labelledby="final-cta-heading">
      <Container className="py-6 sm:py-10 lg:py-16">
        <div className="relative min-h-[360px] lg:min-h-[400px] overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <Image
            src={finalCta.image.src}
            alt={finalCta.image.alt}
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-surface/92 via-surface/70 to-transparent sm:from-surface/78 sm:via-surface/42 md:from-surface/86 md:via-surface/36" aria-hidden="true" />
          <div className="relative z-10 flex min-h-[360px] lg:min-h-[400px] max-w-xl flex-col items-start justify-center px-6 py-6 sm:px-10 sm:py-10 md:max-w-[58%] lg:px-16">
            <span className="rounded-full border border-primary/25 bg-surface/75 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary shadow-sm backdrop-blur-sm">
              {finalCta.eyebrow}
            </span>
            <h2 id="final-cta-heading" className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {finalCta.heading}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">{finalCta.description}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <JoinMovementButton label={finalCta.primaryCta.label} className="px-5 py-2.5 shadow-sm sm:px-6 sm:py-3" />
              <Button href={finalCta.secondaryCta.href} variant="outline" className="border-surface/75 bg-surface/70 px-5 py-2.5 shadow-sm backdrop-blur-sm sm:px-6 sm:py-3">{finalCta.secondaryCta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
