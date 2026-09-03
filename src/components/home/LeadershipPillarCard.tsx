import Image from "next/image";
import type { LeadershipPillar, PillarAccent } from "@/types/site-content.types";

interface LeadershipPillarCardProps {
  pillar: LeadershipPillar;
}

const ACCENT_STYLES: Record<PillarAccent, { iconSurface: string; title: string; divider: string }> = {
  primary: { iconSurface: "bg-primary/10 ring-primary/15", title: "text-primary", divider: "bg-primary" },
  green: { iconSurface: "bg-accent-green/10 ring-accent-green/15", title: "text-accent-green", divider: "bg-accent-green" },
  gold: { iconSurface: "bg-accent-gold/10 ring-accent-gold/15", title: "text-accent-gold", divider: "bg-accent-gold" },
  purple: { iconSurface: "bg-accent-purple/10 ring-accent-purple/15", title: "text-accent-purple", divider: "bg-accent-purple" },
};

/** One "Learn Deeply / Lead Responsibly / Serve Meaningfully" value card. */
export function LeadershipPillarCard({ pillar }: LeadershipPillarCardProps) {
  const accent = ACCENT_STYLES[pillar.accent];

  return (
    <div className="group flex flex-col items-center rounded-lg border border-border bg-surface px-3 py-3 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md">
      <div className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 ${accent.iconSurface}`}>
        <Image src={pillar.icon.src} alt={pillar.icon.alt} width={36} height={36} sizes="36px" className="h-9 w-9 object-contain" />
      </div>
      <h3 className={`mt-2 text-sm font-bold ${accent.title}`}>{pillar.title}</h3>
      <span aria-hidden="true" className={`my-2 h-0.5 w-6 rounded-full ${accent.divider}`} />
      <p className="text-xs leading-snug text-text-secondary">{pillar.description}</p>
    </div>
  );
}
