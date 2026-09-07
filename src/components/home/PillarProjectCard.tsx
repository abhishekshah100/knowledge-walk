import Image from "next/image";
import type { PillarAccent, PillarProject } from "@/types/site-content.types";

interface PillarProjectCardProps {
  project: PillarProject;
}

/** Border / title / link colours keyed by each project's accent. */
const ACCENT_STYLES: Record<PillarAccent, { border: string; title: string; link: string }> = {
  primary: {
    border: "border-primary/30 hover:border-primary",
    title: "text-primary",
    link: "text-primary hover:text-primary-dark",
  },
  green: {
    border: "border-accent-green/30 hover:border-accent-green",
    title: "text-accent-green",
    link: "text-accent-green hover:text-accent-green/80",
  },
  gold: {
    border: "border-accent-gold/30 hover:border-accent-gold",
    title: "text-accent-gold",
    link: "text-accent-gold hover:text-accent-gold/80",
  },
  purple: {
    border: "border-accent-purple/30 hover:border-accent-purple",
    title: "text-accent-purple",
    link: "text-accent-purple hover:text-accent-purple/80",
  },
};

/** One pillar-project card (illustration, title, description, discover link). */
export function PillarProjectCard({ project }: PillarProjectCardProps) {
  const accent = ACCENT_STYLES[project.accent];

  return (
    <div
      className={`flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${accent.border}`}
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes="(min-width: 640px) 112px, 80px"
        className="mx-auto h-20 w-full max-w-20 object-contain sm:h-24 sm:max-w-28"
      />
      <div className="flex w-full flex-1 flex-col gap-1.5">
        <h3 className={`text-base font-bold ${accent.title} text-center w-full`}>{project.title}</h3>
        <p className="flex-1 text-sm leading-6 text-text-secondary">{project.description}</p>
        {/* <Link
          href={project.href}
          className={`inline-flex w-fit items-center gap-1 rounded-sm text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${accent.link}`}
        >
          {project.ctaLabel}
          <Icon name="chevron-right" className="h-3.5 w-3.5" />
        </Link> */}
      </div>
    </div>
  );
}
