import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { GalleryItem } from "@/types/site-content.types";

interface ActionMediaCardProps {
  item: GalleryItem;
}

/** One captioned tile in the Knowledge Walk In Action media row. */
export function ActionMediaCard({ item }: ActionMediaCardProps) {
  const isFeatured = item.type === "video";

  return (
    <article className="group min-w-0 overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-shadow duration-300 motion-safe:hover:shadow-md">
      <div className="relative aspect-video overflow-hidden bg-surface-muted">
        <Image src={item.thumbnail.src} alt={item.thumbnail.alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 46vw, 46vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
        {isFeatured ? (
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-surface bg-surface/90 pl-0.5 text-primary shadow-lg backdrop-blur-sm">
              <Icon name="play" className="h-5 w-5" />
            </span>
          </span>
        ) : null}
        {isFeatured && item.duration ? <span className="absolute bottom-2 right-2 rounded bg-ink/75 px-1.5 py-0.5 text-xs font-bold text-text-inverse">{item.duration}</span> : null}
      </div>
      <p className="truncate px-3 py-3 text-sm font-bold text-text-primary" title={item.title}>{item.title}</p>
    </article>
  );
}
