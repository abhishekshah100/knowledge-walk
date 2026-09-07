import Image from "next/image";
import type { OfficeDetailItem } from "@/types/site-content.types";

interface OfficeDetailRowProps {
  detail: OfficeDetailItem;
}

/** One "Nearby Landmark / By Metro-Bus / Office Hours" info tile in the office info card. */
export function OfficeDetailRow({ detail }: OfficeDetailRowProps) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-surface-muted p-4 transition-colors hover:bg-primary/5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
        <Image
          src={detail.icon.src}
          alt={detail.icon.alt}
          width={20}
          height={20}
          sizes="20px"
          className="h-5 w-5 object-contain [filter:brightness(0)_invert(1)]"
        />
      </span>
      <div>
        <h4 className="text-sm font-bold text-text-primary">{detail.title}</h4>
        {detail.lines.map((line) => (
          <p key={line} className="text-sm leading-6 text-text-secondary">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
