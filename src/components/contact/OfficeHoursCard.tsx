import Image from "next/image";
import type { OfficeHours } from "@/types/site-content.types";

interface OfficeHoursCardProps {
  officeHours: OfficeHours;
}

/** The full-width office-hours card. */
export function OfficeHoursCard({ officeHours }: OfficeHoursCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Image
          src={officeHours.icon.src}
          alt={officeHours.icon.alt}
          width={24}
          height={24}
          sizes="24px"
          className="h-6 w-6 object-contain"
        />
      </span>
      <div>
        <h3 className="text-base font-bold text-text-primary">{officeHours.title}</h3>
        {officeHours.lines.map((line) => (
          <p key={line} className="text-sm text-text-secondary">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
