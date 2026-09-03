"use client";

import { useEffect, useRef } from "react";
import { ENQUIRY_CONTENT } from "@/constants/enquiry";
import { Icon } from "@/components/ui/Icon";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR = "button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    const previousBodyStyles = {
      overflow: document.body.style.overflow,
    };

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const activeFocusable = dialog?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!activeFocusable?.length) return;

      const first = activeFocusable[0];
      const last = activeFocusable[activeFocusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      Object.assign(document.body.style, previousBodyStyles);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`fixed inset-0 z-[70] overflow-y-auto p-3 transition-opacity duration-200 sm:p-6 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} inert={!isOpen}>
      <div className="fixed inset-0 bg-text-primary/45 backdrop-blur-sm" aria-hidden="true" />
      <div className="flex min-h-full items-center justify-center">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
          aria-describedby="enquiry-modal-description"
          onClick={(event) => event.stopPropagation()}
          className={`relative z-10 w-full max-w-xl overflow-visible rounded-xl border border-glass-border bg-glass-bg p-5 shadow-xl backdrop-blur-xl transition-all duration-200 sm:p-7 ${isOpen ? "translate-y-0 scale-100" : "translate-y-3 scale-[0.98]"}`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={ENQUIRY_CONTENT.closeLabel}
            className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/90 text-text-primary transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>

          <div className="pr-12">
            <p className="text-sm font-semibold text-primary">{ENQUIRY_CONTENT.buttons.trigger}</p>
            <h2 id="enquiry-modal-title" className="mt-1 font-serif text-lg text-text-primary sm:text-3xl truncate whitespace-nowrap">
              {ENQUIRY_CONTENT.title}
            </h2>
            <p id="enquiry-modal-description" className="mt-2 max-w-lg text-xs text-text-secondary sm:text-base">
              {ENQUIRY_CONTENT.description}
            </p>
          </div>

          <EnquiryForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
