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
      <div className="flex flex-col gap-3">
        <h1 className="font-serif text-3xl font-extrabold tracking-tight text-accent-purple sm:text-4xl">
          {contactHero.heading}
        </h1>
        <p className="max-w-xl text-sm text-text-secondary sm:text-base">{contactHero.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {contactHero.methods.map((method) => (
          <ContactMethodCard key={method.title} method={method} />
        ))}
      </div>

      <WhatsAppCard channel={contactHero.whatsapp} />
      <OfficeHoursCard officeHours={contactHero.officeHours} />
    </div>
  );
}
