import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImageCollage } from "./ImageCollage";
import { LeadershipPath } from "./LeadershipPath";
import { LeadershipPillarCard } from "./LeadershipPillarCard";
import type { BuildingLeadersContent } from "@/types/site-content.types";

interface BuildingLeadersSectionProps {
  buildingLeaders: BuildingLeadersContent;
}

/**
 * "Building Informed Leaders For Tomorrow" — the About section. An image
 * collage sits beside the mission copy, the Knowledge/Leadership/Impact
 * path, and the three value cards; everything below `lg` stacks into a
 * single column.
 */
export function BuildingLeadersSection({ buildingLeaders }: BuildingLeadersSectionProps) {
  return (
    <section className="relative">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <GlassCard className="px-5 py-5 sm:px-8 sm:py-6 lg:px-12 lg:py-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <ImageCollage images={buildingLeaders.images} />
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">{buildingLeaders.heading}</h2>
              <p className="text-sm text-text-secondary sm:text-base">{buildingLeaders.description}</p>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6">
                <LeadershipPath pillars={buildingLeaders.pillars} />
                <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
                  {buildingLeaders.pillars.map((pillar) => (
                    <LeadershipPillarCard key={pillar.title} pillar={pillar} />
                  ))}
                </div>
              </div>

              <Button
                href={buildingLeaders.cta.href}
                className="self-center px-4 py-2 text-xs shadow-sm ring-2 ring-primary/10 sm:min-w-48 sm:px-8 sm:py-3.5 sm:text-sm sm:shadow-lg sm:ring-4"
              >
                {buildingLeaders.cta.label}
              </Button>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
