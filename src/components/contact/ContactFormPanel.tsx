import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import type { ContactFormContent } from "@/types/site-content.types";

interface ContactFormPanelProps {
  form: ContactFormContent;
}

/** Right column: the "Send Us a Message" card wrapping the shared enquiry form. */
export function ContactFormPanel({ form }: ContactFormPanelProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg sm:p-8">
      <h2 className="font-serif text-2xl font-extrabold tracking-tight text-accent-purple sm:text-3xl">
        {form.heading}
      </h2>
      <p className="mt-2 text-sm text-text-secondary sm:text-base">{form.subtitle}</p>

      <EnquiryForm onSuccess={() => {}} />

      <p className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
        <Image
          src="/images/contact/contact-page-assets/icons/success-check.webp"
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
