import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { ORG_PHONE_HREF, ORG_WHATSAPP_HREF } from "@/constants/organization";

/**
 * Fixed call/WhatsApp shortcuts, rendered once in the root layout so they
 * float above every route. Call is a mobile-only convenience — tapping a
 * `tel:` link only ever makes sense on a device that can place a call —
 * while WhatsApp stays available on every device, since it opens fine in
 * a desktop browser too.
 */
export function FloatingContactButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={ORG_PHONE_HREF}
        aria-label="Call us"
        title="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-text-inverse shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:hidden"
      >
        <Icon name="phone" className="h-6 w-6" />
      </a>
      <a
        href={ORG_WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (opens in a new tab)"
        title="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-whatsapp to-whatsapp-dark shadow-[0_8px_20px_-4px_rgba(18,140,126,0.55)] ring-1 ring-white/15 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-4px_rgba(18,140,126,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp/50 opacity-0 group-hover:animate-ping group-hover:opacity-60"
        />
        <Image
          src="/images/contact/icons/whatsapp.webp"
          alt=""
          width={28}
          height={28}
          sizes="28px"
          className="relative h-6 w-6 object-contain [filter:brightness(0)_invert(1)]"
        />
      </a>
    </div>
  );
}
