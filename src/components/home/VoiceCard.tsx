import Image from "next/image";
import type { Testimonial } from "@/types/site-content.types";

interface VoiceCardProps {
  testimonial: Testimonial;
}

/** Compact participant testimonial card used by the Voices Of Change slider. */
export function VoiceCard({ testimonial }: VoiceCardProps) {
  return (
    <article className="flex h-full min-h-44 items-start gap-3 rounded-lg border border-border bg-surface p-4 shadow-sm sm:min-h-48 sm:p-5">
      <Image
        src={testimonial.avatar.src}
        alt={testimonial.avatar.alt}
        width={56}
        height={56}
        sizes="56px"
        className="h-12 w-12 shrink-0 rounded-full border-2 border-surface object-cover shadow-sm sm:h-14 sm:w-14"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <blockquote className="line-clamp-4 text-base leading-6 text-text-secondary">
          <span className="mr-1 font-serif text-xl leading-none text-primary" aria-hidden="true">“</span>
          {testimonial.quote}
        </blockquote>
        <div className="mt-3 min-w-0 text-sm">
          <p className="font-bold text-text-primary">{testimonial.name}</p>
          <p className="truncate text-text-secondary">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
