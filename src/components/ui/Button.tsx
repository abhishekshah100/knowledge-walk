import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Shared "3D glass" mechanics: a glossy inset highlight along the top edge
 * (light catching a curved glass surface), a soft ambient shadow that
 * grounds the button, a gentle lift on hover, and a quick press-down on
 * click — the combination reads as a tactile, faintly translucent glass
 * pill rather than a flat color fill. The white highlight is a universal
 * "light source" value (not a brand color), and the ambient shadow tints
 * itself from each variant's own theme color via `color-mix()` — no new
 * hex values are introduced outside `theme.css`.
 */
const baseStyles =
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:duration-75 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-white/25 bg-primary/95 text-text-inverse shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_10px_22px_-8px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] hover:bg-primary-dark/95 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_14px_28px_-8px_color-mix(in_srgb,var(--color-primary)_75%,transparent)] active:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_4px_10px_-4px_color-mix(in_srgb,var(--color-primary)_55%,transparent)]",
  outline:
    "border border-primary/50 bg-glass-bg text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_6px_16px_-8px_color-mix(in_srgb,var(--color-primary)_25%,transparent)] hover:border-primary hover:bg-surface-muted hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_10px_20px_-8px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
};

/**
 * Shared call-to-action button. Renders a `<Link>` when `href` is passed,
 * otherwise a native `<button>`. Colours always come from the `primary`/
 * `border`/etc. Tailwind tokens defined in `theme.css`.
 */
export function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if (rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={styles} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
