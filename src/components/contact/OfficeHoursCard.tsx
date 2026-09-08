import Image from "next/image";
import type { OfficeHours } from "@/types/site-content.types";

interface OfficeHoursCardProps {
  officeHours: OfficeHours;
}

/**
 * The office-hours tile. Shares the same icon-chip/padding/height treatment
 * as `ContactMethodCard` so all three sit as equal-height columns in the
 * "Email Us / Call Us / Office Hours" row.
 */
export function OfficeHoursCard({ officeHours }: OfficeHoursCardProps) {
  return (
    <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-shadow hover:shadow-md sm:items-start sm:text-left">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Image
          src={officeHours.icon.src}
          alt={officeHours.icon.alt}
          width={28}
          height={28}
          sizes="28px"
          className="h-7 w-7 object-contain"
        />
      </span>
      <div className="flex flex-1 flex-col">
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
