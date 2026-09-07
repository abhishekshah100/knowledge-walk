import Image from "next/image";
import type { ImageAsset } from "@/types/site-content.types";

interface OfficeMapEmbedProps {
  src: string;
  title: string;
  markerIcon: ImageAsset;
  markerLabel: string;
}

/**
 * Live, embedded Google Map (no API key needed for the `output=embed`
 * view). Google's own marker only reliably appears for well-known points
 * of interest, not arbitrary office addresses, so we overlay our own pin
 * — the map is always centered on the query address, so a pin fixed at
 * the container's exact center lines up with it.
 */
export function OfficeMapEmbed({ src, title, markerIcon, markerLabel }: OfficeMapEmbedProps) {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-border shadow-lg sm:h-[420px] lg:h-full">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
        <span className="mb-1 rounded-full bg-surface px-3 py-1 text-xs font-bold whitespace-nowrap text-primary shadow-md">
          {markerLabel}
        </span>
        <Image
          src={markerIcon.src}
          alt={markerIcon.alt}
          width={40}
          height={40}
          sizes="40px"
          className="h-10 w-10 object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
}
