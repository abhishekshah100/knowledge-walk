import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Frosted "glass" surface used for floating badges and overlay panels
 * (e.g. the Learn/Lead/Serve badges on the hero image).
 */
export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-glass-border bg-glass-bg shadow-sm backdrop-blur-md ${className}`.trim()}
    >
      {children}
    </div>
  );
}
