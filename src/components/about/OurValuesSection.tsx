import { Container } from "@/components/ui/Container";
import { ValueCard } from "./ValueCard";
import type { OurValuesContent } from "@/types/site-content.types";

interface OurValuesSectionProps {
  values: OurValuesContent;
}

/**
 * About Us page's third section — "Our Values". A centered badge/heading
 * introduces five value tiles: two columns on mobile, three on tablet,
 * one full row of five on desktop.
 */
export function OurValuesSection({ values }: OurValuesSectionProps) {
  return (
    <section className="relative bg-background">
      <Container className="py-12 lg:py-14">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            {values.badge}
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {values.heading}
          </h2>
          <p className="max-w-xl text-sm text-text-secondary sm:text-base">{values.subtitle}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {values.values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </Container>
    </section>
  );
}
