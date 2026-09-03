import Image from "next/image";
import type { IdeaInMotion } from "@/types/site-content.types";

interface ActivityCardProps {
  activity: IdeaInMotion;
}

/** Compact, reusable card for one Ideas In Motion activity. */
export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="group flex min-h-0 flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-[transform,box-shadow] duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md">
      <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
        <Image
          src={activity.image.src}
          alt={activity.image.alt}
          fill
          sizes="(min-width: 1280px) 16vw, (min-width: 640px) 30vw, 46vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="relative flex flex-1 flex-col items-center px-4 pb-5 pt-7 text-center">
        <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2" aria-hidden="true">
          <span className="h-px w-5 bg-border" />
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface p-1 shadow-sm">
            <Image src={activity.icon.src} alt="" width={40} height={40} className="h-full w-full" />
          </span>
          <span className="h-px w-5 bg-border" />
        </div>
        <h3 className="text-base font-bold text-text-primary">{activity.title}</h3>
        <span className="mt-2 h-0.5 w-8 rounded-full bg-primary/70" aria-hidden="true" />
        <p className="mt-2 text-sm leading-6 text-text-secondary">{activity.description}</p>
      </div>
    </article>
  );
}
