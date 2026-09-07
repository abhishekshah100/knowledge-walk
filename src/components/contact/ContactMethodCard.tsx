import Image from "next/image";
import Link from "next/link";
import type { ContactAccent, ContactMethod } from "@/types/site-content.types";

interface ContactMethodCardProps {
  method: ContactMethod;
}

const ACCENT_STYLES: Record<ContactAccent, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  green: { bg: "bg-accent-green/10", text: "text-accent-green" },
  purple: { bg: "bg-accent-purple/10", text: "text-accent-purple" },
};

/** One "Email Us / Call Us" channel card. */
export function ContactMethodCard({ method }: ContactMethodCardProps) {
  const accent = ACCENT_STYLES[method.accent];

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md">
      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent.bg}`}>
        <Image src={method.icon.src} alt={method.icon.alt} width={24} height={24} sizes="24px" className="h-6 w-6 object-contain" />
      </span>
      <div>
        <h3 className="text-base font-bold text-text-primary">{method.title}</h3>
        <p className="text-sm text-text-secondary">{method.description}</p>
      </div>
      <Link href={method.href} className={`text-sm font-semibold ${accent.text} hover:underline`}>
        {method.value}
      </Link>
    </div>
  );
}
