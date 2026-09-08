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
 * separate cards. Two columns on mobile (five items force-fit into one
 * cramped row otherwise), three on tablet, five in a single row from
 * `lg` up — the same responsive breakdown already used for the About
 * page's five-item Values grid.
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
          <div className="grid grid-cols-2 gap-3 px-3 py-4 sm:grid-cols-3 sm:px-4 lg:grid-cols-5 lg:px-2 lg:py-3">
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
