import Image from "next/image";
import Link from "next/link";
import type { ContactAccent, ContactMethod } from "@/types/site-content.types";

interface ContactMethodCardProps {
  method: ContactMethod;
}

/** Icon-chip tint and hover border colour, keyed by each method's accent. */
const ICON_BG: Record<ContactAccent, string> = {
  primary: "bg-primary/10",
  green: "bg-accent-green/10",
  purple: "bg-accent-purple/10",
};

const HOVER_BORDER: Record<ContactAccent, string> = {
  primary: "hover:border-primary",
  green: "hover:border-accent-green",
  purple: "hover:border-accent-purple",
};

/** One "Email Us / Call Us" channel card. */
export function ContactMethodCard({ method }: ContactMethodCardProps) {
  return (
    <div
      className={`flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:items-start sm:text-left ${HOVER_BORDER[method.accent]}`}
    >
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${ICON_BG[method.accent]}`}>
        <Image src={method.icon.src} alt={method.icon.alt} width={28} height={28} sizes="28px" className="h-7 w-7 object-contain" />
      </span>
      <div className="flex flex-1 flex-col">
        <h3 className="text-base font-bold text-text-primary">{method.title}</h3>
        <p className="text-sm text-text-secondary">{method.description}</p>
      </div>
      <Link
        href={method.href}
        className="-m-1 w-fit max-w-full rounded-md p-1 text-sm font-semibold break-all text-primary transition-colors hover:text-primary-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        {method.value}
      </Link>
    </div>
  );
}
