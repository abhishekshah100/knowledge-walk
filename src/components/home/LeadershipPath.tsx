import Image from "next/image";
import type { LeadershipPillar } from "@/types/site-content.types";

interface LeadershipPathProps {
  pillars: LeadershipPillar[];
}

/** Horizontal on mobile and vertical on desktop: Knowledge → Leadership → Impact. */
export function LeadershipPath({ pillars }: LeadershipPathProps) {
  return (
    <ol className="relative mx-auto grid w-full max-w-md grid-cols-3 gap-2 before:absolute before:top-5 before:right-[16.667%] before:left-[16.667%] before:border-t-2 before:border-dashed before:border-border before:content-[''] lg:mx-0 lg:flex lg:min-h-52 lg:w-fit lg:max-w-none lg:flex-col lg:justify-between lg:gap-0 lg:self-stretch lg:before:top-5 lg:before:right-auto lg:before:bottom-5 lg:before:left-5 lg:before:border-t-0 lg:before:border-l-2">
      {pillars.map((pillar) => (
        <li key={pillar.label} className="relative z-10 flex flex-col items-center gap-1.5 text-center lg:flex-row lg:gap-3 lg:text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface shadow-sm ring-1 ring-border">
            <Image
              src={pillar.pathIcon.src}
              alt={pillar.pathIcon.alt}
              width={36}
              height={36}
              sizes="36px"
              className="h-9 w-9 shrink-0 object-contain"
            />
          </span>
          <span className="text-xs font-semibold text-text-primary sm:text-sm">{pillar.label}</span>
        </li>
      ))}
    </ol>
  );
}
