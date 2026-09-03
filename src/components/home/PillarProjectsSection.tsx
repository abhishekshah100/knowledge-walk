import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PillarProjectCard } from "./PillarProjectCard";
import type { PillarProjectsContent } from "@/types/site-content.types";

interface PillarProjectsSectionProps {
  pillarProjects: PillarProjectsContent;
}

/** "Our Pillar Projects" — the four-card grid of pillar projects. */
export function PillarProjectsSection({ pillarProjects }: PillarProjectsSectionProps) {
  return (
    <section className="relative">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <SectionHeader
          heading={pillarProjects.heading}
          subtitle={pillarProjects.subtitle}
          headingClassName="text-text-primary"
        />

        <div className="grid grid-cols-2 gap-3 pt-5 sm:gap-4 sm:pt-[var(--space-subtitle-content)] lg:grid-cols-4">
          {pillarProjects.projects.map((project) => (
            <PillarProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
