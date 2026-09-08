import Image from "next/image";
import type { TeamMember } from "@/types/site-content.types";

interface TeamMemberCardProps {
  member: TeamMember;
}

/**
 * One team member's photo, name, role and short quote. The content
 * block is vertically centered (not top-aligned) so a shorter quote
 * doesn't leave one large empty gap at the bottom of the card — any
 * extra height (from taller neighbours in the same row) distributes
 * evenly above and below instead.
 */
export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={member.photo.src}
          alt={member.photo.alt}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-5 text-center">
        <h3 className="text-base font-bold text-text-primary">{member.name}</h3>
        <p className="mt-2 text-sm font-semibold text-primary">{member.role}</p>
        <p className="mt-3 text-sm leading-6 text-text-secondary italic">“{member.quote}”</p>
      </div>
    </article>
  );
}
