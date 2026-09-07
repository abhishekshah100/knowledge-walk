import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { OfficeDetailRow } from "./OfficeDetailRow";
import type { OfficeLocationContent } from "@/types/site-content.types";

interface OfficeInfoCardProps {
  officeLocation: OfficeLocationContent;
}

/** Right-hand sidebar card: office name/address, quick facts and the directions button. */
export function OfficeInfoCard({ officeLocation }: OfficeInfoCardProps) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-surface p-7 shadow-xl">
      {/* "Our Office" — the hero block, set apart with a tinted panel */}
      <div className="flex flex-col gap-3 rounded-xl bg-primary/5 p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary shadow-sm">
            <Image
              src={officeLocation.markerIcon.src}
              alt={officeLocation.markerIcon.alt}
              width={22}
              height={22}
              sizes="22px"
              className="h-[22px] w-[22px] object-contain [filter:brightness(0)_invert(1)]"
            />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wide text-text-secondary uppercase">{officeLocation.officeName}</p>
            <p className="text-lg font-bold text-text-primary">{officeLocation.officeBrand}</p>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 pl-[60px]">
          {officeLocation.addressLines.map((line) => (
            <p key={line} className="text-sm leading-6 text-text-secondary">
              {line}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {officeLocation.details.map((detail) => (
          <OfficeDetailRow key={detail.title} detail={detail} />
        ))}
      </div>

      <Button
        href={officeLocation.directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full gap-2"
      >
        <Image
          src="/images/contact/contact-page-assets/icons/navigation.webp"
          alt=""
          width={16}
          height={16}
          sizes="16px"
          className="h-4 w-4 object-contain [filter:brightness(0)_invert(1)]"
        />
        {officeLocation.directionsLabel}
      </Button>
    </div>
  );
}
