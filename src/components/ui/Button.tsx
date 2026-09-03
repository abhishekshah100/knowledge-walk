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

const baseStyles =
  "inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:min-h-11 sm:px-6 sm:py-2.5";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-text-inverse hover:bg-primary-dark",
  outline: "border-2 border-border bg-surface text-text-primary hover:bg-surface-muted hover:border-primary-light",
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
