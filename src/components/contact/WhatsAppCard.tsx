import Image from "next/image";
import Link from "next/link";
import type { ContactChannel } from "@/types/site-content.types";

interface WhatsAppCardProps {
  channel: ContactChannel;
}

/**
 * The full-width WhatsApp channel card with its own action button. Always
 * styled in WhatsApp's own brand colour (darkened for contrast) rather
 * than the shared `ContactAccent` palette, since this card only ever
 * represents one specific channel.
 */
export function WhatsAppCard({ channel }: WhatsAppCardProps) {
  return (
    <div className="flex flex-col items-stretch gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex w-full flex-col items-center gap-3 text-center sm:w-auto sm:flex-row sm:items-center sm:text-left">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-whatsapp/10">
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
        aria-label={`${channel.actionLabel} (opens WhatsApp in a new tab)`}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-text-inverse shadow-sm transition-colors hover:bg-whatsapp-dark sm:w-auto"
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
