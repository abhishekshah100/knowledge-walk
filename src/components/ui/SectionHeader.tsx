interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Extra classes merged onto the <h2> for local alignment or scale changes. */
  headingClassName?: string;
}

/**
 * Standard eyebrow/heading/subtitle block used at the top of a page
 * section. Spacing between the parts follows the heading-to-subtitle gap
 * defined in `theme.css`; the gap from this block to the section's body
 * content is applied by the section itself via `gap-[var(--space-subtitle-content)]`.
 */
export function SectionHeader({ eyebrow, heading, subtitle, align = "center", headingClassName = "" }: SectionHeaderProps) {
  const alignmentClasses = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-[var(--space-heading-subtitle)] ${alignmentClasses}`}>
      {eyebrow ? <span className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</span> : null}
      <h2 className={`text-2xl font-bold tracking-tight sm:text-3xl ${headingClassName}`.trim()}>{heading}</h2>
      {subtitle ? <p className="max-w-2xl text-base leading-7">{subtitle}</p> : null}
    </div>
  );
}
