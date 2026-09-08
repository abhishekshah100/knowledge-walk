import { ContactMethodCard } from "./ContactMethodCard";
import { OfficeHoursCard } from "./OfficeHoursCard";
import { WhatsAppCard } from "./WhatsAppCard";
import type { ContactHeroContent } from "@/types/site-content.types";

interface ConnectWithUsPanelProps {
  contactHero: ContactHeroContent;
}

/** Left column: heading, channel cards, WhatsApp and office hours. */
export function ConnectWithUsPanel({ contactHero }: ConnectWithUsPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4 flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
        <span className="h-1 w-12 rounded-full bg-accent-purple" aria-hidden="true" />
        <h1 className="font-serif text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
          {contactHero.heading}
        </h1>
        <p className="max-w-[540px] text-base leading-[1.6] text-text-secondary">{contactHero.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactHero.methods.map((method) => (
          <ContactMethodCard key={method.title} method={method} />
        ))}
        <OfficeHoursCard officeHours={contactHero.officeHours} />
      </div>

      <WhatsAppCard channel={contactHero.whatsapp} />
    </div>
  );
}
