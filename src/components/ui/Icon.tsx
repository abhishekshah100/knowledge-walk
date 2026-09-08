import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "menu" | "close" | "chevron-left" | "chevron-right" | "chevron-down"
  | "book-open" | "users" | "hand-heart" | "landmark" | "calendar-days"
  | "user-check" | "columns-3" | "compass" | "megaphone" | "landmark-arch"
  | "handshake" | "shield-check" | "clock" | "map-pin" | "play" | "mail" | "phone"
  | "whatsapp" | "send" | "check-circle" | "quote";

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & { name: IconName };

const ICON_PATHS: Record<IconName, ReactNode> = {
  menu: <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>,
  close: <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>,
  "chevron-left": <polyline points="15 18 9 12 15 6" />,
  "chevron-right": <polyline points="9 18 15 12 9 6" />,
  "chevron-down": <polyline points="6 9 12 15 18 9" />,
  "book-open": <><path d="M2 5c2-1 5-1 7 0v14c-2-1-5-1-7 0Z" /><path d="M22 5c-2-1-5-1-7 0v14c2-1 5-1 7 0Z" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" /><circle cx="17" cy="9" r="2.6" /><path d="M15.5 13.6c2.4.3 4 2.2 4 5.4" /></>,
  "hand-heart": <><path d="M12 8.6c-1-1.7-3.4-1.9-4.4-.2-1 1.6 0 3.2 4.4 6.6 4.4-3.4 5.4-5 4.4-6.6-1-1.7-3.4-1.5-4.4.2Z" /><path d="M3 15.5h4l2.2-1.6a2 2 0 0 1 2.4 0l.9.7a1.6 1.6 0 0 1 -1 2.9H8" /><path d="M3 14.5v6" /></>,
  landmark: <><path d="M4 9.5 12 4l8 5.5" /><path d="M5 9.5v9M9.5 9.5v9M14.5 9.5v9M19 9.5v9" /><path d="M3 20.5h18" /></>,
  "calendar-days": <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4M16 3v4" /></>,
  "user-check": <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" /><path d="M15.5 12.5l2 2 3.5-3.8" /></>,
  "columns-3": <><rect x="4" y="5" width="4" height="14" rx="1" /><rect x="10" y="5" width="4" height="14" rx="1" /><rect x="16" y="5" width="4" height="14" rx="1" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15 9l-2 6-6 2 2-6 6-2Z" /></>,
  megaphone: <><path d="M3 10v4a1 1 0 0 0 1 1h2l3 4V5l-3 4H4a1 1 0 0 0-1 1Z" /><path d="M13 8a4 4 0 0 1 0 8" /><path d="M16.5 5.5a8 8 0 0 1 0 13" /></>,
  "landmark-arch": <><path d="M4 21V11a8 8 0 0 1 16 0v10" /><path d="M3 21h18" /><path d="M9 21v-6a3 3 0 0 1 6 0v6" /></>,
  handshake: <><path d="M2.5 11.5l4-2.8 3 1.8h5l3-1.8 4 2.8" /><path d="M7.5 13.8l2 2 2-1.2 2 2 2-1.2" /></>,
  "shield-check": <><path d="M12 3.5l7 2.6v5.4c0 4.3-2.9 7.9-7 9-4.1-1.1-7-4.7-7-9V6.1Z" /><path d="M9 12l2 2 4-4.2" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  "map-pin": <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  play: <path d="m9 6 8 6-8 6Z" fill="currentColor" stroke="none" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  phone: <path d="M6 3.5 9 7l-1.8 2.3c1.1 2.2 2.9 4 5.1 5.1L15 12.6l3.5 3c.4.3.5.8.3 1.3l-1 2.4c-.2.5-.7.8-1.2.7C9.6 19 5 14.4 4.1 7.4c-.1-.5.2-1 .7-1.2l2.4-1c.5-.2 1-.1 1.3.3Z" />,
  whatsapp: <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z M8.5 8.3c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.4.6 1.5.7 1.6.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.6-.7.8-.9.2-.2.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3 0 .2 0 .9-.3 1.3-.3.5-1.4 1-2 1-.6 0-1.5-.1-3.4-1-2.4-1.2-4-3.6-4.1-3.8-.1-.2-1-1.3-1-2.5 0-1.2.6-1.7.8-2Z" fill="currentColor" stroke="none" />,
  send: <><path d="M4 20 20.5 12 4 4l2 7 9 1-9 1Z" /></>,
  "check-circle": <><circle cx="12" cy="12" r="9" /><path d="m8.5 12.3 2.3 2.3 4.7-5" /></>,
  quote: <path d="M7.5 8.5c-2 1.2-3 2.9-3 5.1 0 2.1 1.4 3.4 3.1 3.4 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.3-2.4-.2 0-.4 0-.6.1.2-1.4 1.2-2.6 2.5-3.4Zm8 0c-2 1.2-3 2.9-3 5.1 0 2.1 1.4 3.4 3.1 3.4 1.5 0 2.6-1.1 2.6-2.6 0-1.4-1-2.4-2.3-2.4-.2 0-.4 0-.6.1.2-1.4 1.2-2.6 2.5-3.4Z" fill="currentColor" stroke="none" />,
};

/** Renders one of the site's small inline stroke icons by name. */
export function Icon({ name, className = "h-5 w-5", ...rest }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" {...rest}>{ICON_PATHS[name]}</svg>;
}
