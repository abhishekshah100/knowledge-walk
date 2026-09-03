import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetricItem } from "./MetricItem";
import type { StatsSectionContent } from "@/types/site-content.types";

interface StatsSectionProps {
  stats: StatsSectionContent;
}

/**
 * "Growing Ideas Into Impact" — all five metrics live inside one shared
 * glass panel, separated by hairline dividers instead of gaps between
 * separate cards. `sm:grid-cols-5` keeps them on one row at every width
 * from `sm` up (a grid divides evenly, so it can't overflow into an
 * unwanted second row the way fixed-width items could).
 */
export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="relative">
      <Container className="pt-[var(--space-section-mobile)] md:pt-[var(--space-section-tablet)] lg:pt-[var(--space-section-desktop)]">
        <SectionHeader
          heading={stats.heading}
          headingClassName="text-center text-2xl font-bold text-text-primary sm:text-3xl"
        />

        <GlassCard className="mt-5 overflow-hidden sm:mt-[var(--space-subtitle-content)]">
          <div className="grid grid-cols-5 gap-3 px-2 py-3">
            {stats.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-w-0 min-h-[110px] flex-col items-center justify-center gap-2 p-3 rounded-lg bg-white/90 shadow-sm"
              >
                <MetricItem stat={stat} />
              </div>
            ))}
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
