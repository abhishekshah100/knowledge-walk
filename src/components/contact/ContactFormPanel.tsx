import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import type { ContactFormContent } from "@/types/site-content.types";

interface ContactFormPanelProps {
  form: ContactFormContent;
  /** Preselects this label in the form's "Program interest" field. */
  initialProgram?: string;
}

/** Right column: the "Send Us a Message" card wrapping the shared enquiry form. */
export function ContactFormPanel({ form, initialProgram }: ContactFormPanelProps) {
  return (
    <div id="contact-form" className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 shadow-lg sm:p-8">
      <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
        <span className="mb-3 h-1 w-12 rounded-full bg-accent-purple" aria-hidden="true" />
        <h2 className="font-serif text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
          {form.heading}
        </h2>
        <p className="mt-2 text-sm text-text-secondary sm:text-base">{form.subtitle}</p>
      </div>

      <EnquiryForm onSuccess={() => {}} initialProgram={initialProgram} />

      <p className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
        <Image
          src="/images/contact/icons/success-check.webp"
          alt=""
          width={16}
          height={16}
          sizes="16px"
          className="h-4 w-4 shrink-0 object-contain"
        />
        {form.responseNote}
      </p>
    </div>
  );
}
