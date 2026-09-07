import Image from "next/image";
import Link from "next/link";
import type { ContactAccent, ContactChannel } from "@/types/site-content.types";

interface WhatsAppCardProps {
  channel: ContactChannel;
}

const TINT_STYLES: Record<ContactAccent, string> = {
  primary: "bg-primary/10",
  green: "bg-accent-green/10",
  purple: "bg-accent-purple/10",
};

const SOLID_STYLES: Record<ContactAccent, string> = {
  primary: "bg-primary hover:bg-primary-dark",
  green: "bg-accent-green hover:bg-accent-green/90",
  purple: "bg-accent-purple hover:bg-accent-purple/90",
};

/** The full-width WhatsApp channel card with its own action button. */
export function WhatsAppCard({ channel }: WhatsAppCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${TINT_STYLES[channel.accent]}`}>
          <Image src={channel.icon.src} alt={channel.icon.alt} width={24} height={24} sizes="24px" className="h-6 w-6 object-contain" />
        </span>
        <div>
          <h3 className="text-base font-bold text-text-primary">{channel.title}</h3>
          <p className="text-sm text-text-secondary">{channel.description}</p>
        </div>
      </div>
      <Link
        href={channel.actionHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-text-inverse shadow-sm transition-colors sm:w-auto ${SOLID_STYLES[channel.accent]}`}
      >
        <Image
          src={channel.icon.src}
          alt=""
          width={18}
          height={18}
          sizes="18px"
          className="h-[18px] w-[18px] object-contain [filter:brightness(0)_invert(1)]"
        />
        {channel.actionLabel}
      </Link>
    </div>
  );
}
