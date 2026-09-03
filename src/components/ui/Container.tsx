import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Centers content and applies the site's responsive max-width and
 * horizontal gutters (see `.content-container` in globals.css, driven by
 * the tokens in `src/styles/theme.css`). Use this instead of repeating
 * `max-w-*` utilities in every section.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`content-container ${className}`.trim()}>{children}</div>;
}
