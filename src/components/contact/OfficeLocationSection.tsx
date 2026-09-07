import { Container } from "@/components/ui/Container";
import { OfficeInfoCard } from "./OfficeInfoCard";
import { OfficeMapEmbed } from "./OfficeMapEmbed";
import type { OfficeLocationContent } from "@/types/site-content.types";

interface OfficeLocationSectionProps {
  officeLocation: OfficeLocationContent;
}

/**
 * "Find Us on the Map" — the Contact page's second section. A live map
 * sits beside the office info card; both stack into a single column
 * below `lg`. Anchored by `#office-location` so the "View office
 * location" link in the first section can jump straight to it.
 */
export function OfficeLocationSection({ officeLocation }: OfficeLocationSectionProps) {
  return (
    <section id="office-location" className="relative scroll-mt-24">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-2xl font-extrabold tracking-tight text-accent-purple sm:text-3xl">
            {officeLocation.heading}
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-stretch">
          <OfficeMapEmbed
            src={officeLocation.mapEmbedSrc}
            title={officeLocation.mapTitle}
            markerIcon={officeLocation.markerIcon}
            markerLabel={officeLocation.officeBrand}
          />
          <OfficeInfoCard officeLocation={officeLocation} />
        </div>
      </Container>
    </section>
  );
}
