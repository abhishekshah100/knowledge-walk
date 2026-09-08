"use client";

import Image from "next/image";
import PhoneInput from "react-phone-number-input/input";
import { getCountries, getCountryCallingCode, type Country } from "react-phone-number-input";
import { FormEvent, useEffect, useId, useMemo, useRef, useState } from "react";
import { ENQUIRY_CONTENT, ENQUIRY_DEFAULT_COUNTRY, ENQUIRY_LIMITS, ENQUIRY_PROGRAM_OPTIONS, INITIAL_ENQUIRY_VALUES } from "@/constants/enquiry";
import { Icon } from "@/components/ui/Icon";
import { sendEnquiry } from "@/lib/enquiryClient";
import { normaliseEnquiryValues, validateEnquiry } from "@/lib/enquiryValidation";
import type { EnquiryErrors, EnquiryFieldName, EnquiryFormValues } from "@/types/enquiry";

interface EnquiryFormProps {
  onSuccess: () => void;
  /** Preselects this label in the "Program interest" field, e.g. from a "How Can We Help?" topic click. */
  initialProgram?: string;
}

type SubmissionStatus = "idle" | "sending" | "success" | "error";

const COUNTRY_DISPLAY_NAMES = new Intl.DisplayNames(["en"], { type: "region" });
const SUCCESS_CLOSE_DELAY = 2000;

function countryFlag(country: Country) {
  return country.replace(/./g, (character) => String.fromCodePoint(127397 + character.charCodeAt(0)));
}

function countryName(country: Country) {
  return COUNTRY_DISPLAY_NAMES.of(country) ?? country;
}

export function EnquiryForm({ onSuccess, initialProgram }: EnquiryFormProps) {
  // This form is mounted more than once at a time (the "Join the Movement"
  // modal stays in the DOM alongside the Contact page's inline copy), so
  // every field id is namespaced per-instance to keep `htmlFor`/
  // `aria-describedby`/`aria-controls` pointing at the right element.
  const uid = useId();
  const fieldId = (field: string) => `enquiry-${field}-${uid}`;
  const errorId = (field: EnquiryFieldName) => `${fieldId(field)}-error`;

  const [values, setValues] = useState<EnquiryFormValues>(INITIAL_ENQUIRY_VALUES);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [country, setCountry] = useState<Country>(ENQUIRY_DEFAULT_COUNTRY);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const countryMenuRef = useRef<HTMLDivElement>(null);
  const successTimerRef = useRef<number | null>(null);
  const [lastAppliedProgram, setLastAppliedProgram] = useState(initialProgram);

  const countries = useMemo(() => getCountries(), []);
  const filteredCountries = useMemo(() => {
    const normalizedSearch = countrySearch.trim().toLowerCase();
    if (!normalizedSearch) return countries;

    return countries.filter((item) => {
      const code = `+${getCountryCallingCode(item)}`;
      return countryName(item).toLowerCase().includes(normalizedSearch) || code.includes(normalizedSearch);
    });
  }, [countries, countrySearch]);

  useEffect(() => {
    if (isCountryMenuOpen) searchInputRef.current?.focus();
  }, [isCountryMenuOpen]);

  // Close the country dropdown on any click/tap outside it — clicking
  // elsewhere in the form (or the page) shouldn't leave it hanging open.
  useEffect(() => {
    if (!isCountryMenuOpen) return;

    function handleOutsideClick(event: MouseEvent) {
      if (!countryMenuRef.current?.contains(event.target as Node)) {
        setIsCountryMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isCountryMenuOpen]);

  useEffect(() => () => {
    if (successTimerRef.current) window.clearTimeout(successTimerRef.current);
  }, []);

  // A "How Can We Help?" topic click passes a new `initialProgram` in —
  // seed (or re-seed) the program field without touching anything else
  // the visitor has already filled in. Adjusting state during render
  // (React's recommended pattern for this) rather than in an effect
  // avoids an extra render pass.
  if (initialProgram && initialProgram !== lastAppliedProgram) {
    setLastAppliedProgram(initialProgram);
    setValues((current) => ({ ...current, program: initialProgram }));
  }

  function updateValue(field: EnquiryFieldName, value: string) {
    setValues((current) => (current[field] === value ? current : { ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
    setSubmissionError((current) => (current ? "" : current));
  }

  function selectCountry(nextCountry: Country) {
    if (nextCountry === country) {
      setIsCountryMenuOpen(false);
      return;
    }

    setCountry(nextCountry);
    updateValue("phone", "");
    setIsCountryMenuOpen(false);
    setCountrySearch("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "success") return;

    const cleanedValues = normaliseEnquiryValues(values);
    const nextErrors = validateEnquiry(cleanedValues);
    setValues(cleanedValues);
    setErrors(nextErrors);
    setSubmissionError("");

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    try {
      await sendEnquiry(cleanedValues);
      setStatus("success");
      setValues(INITIAL_ENQUIRY_VALUES);
      setErrors({});
      successTimerRef.current = window.setTimeout(onSuccess, SUCCESS_CLOSE_DELAY);
    } catch (error) {
      setStatus("error");
      setSubmissionError(error instanceof Error ? error.message : ENQUIRY_CONTENT.messages.failure);
    }
  }

  const isSending = status === "sending";
  const isSuccess = status === "success";
  const messageCount = values.message.length;
  const messageCountId = fieldId("message-count");
  const inputClassName = "mt-1.5 min-h-12 w-full rounded-lg border border-border bg-surface/90 px-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/70 focus:border-primary focus:ring-[3px] focus:ring-primary/35 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <form className="mt-6 space-y-6" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("full-name")} className="text-sm font-semibold text-text-primary">{ENQUIRY_CONTENT.fields.fullName.label}</label>
          <input id={fieldId("full-name")} name="fullName" autoComplete="name" maxLength={ENQUIRY_LIMITS.fullName} disabled={isSending || isSuccess} value={values.fullName} onChange={(event) => updateValue("fullName", event.target.value)} placeholder={ENQUIRY_CONTENT.fields.fullName.placeholder} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? errorId("fullName") : undefined} className={inputClassName} />
          {errors.fullName ? <p id={errorId("fullName")} className="mt-1 text-xs text-danger">{errors.fullName}</p> : null}
        </div>
        <div>
          <label htmlFor={fieldId("email")} className="text-sm font-semibold text-text-primary">{ENQUIRY_CONTENT.fields.email.label}</label>
          <input id={fieldId("email")} name="email" type="email" autoComplete="email" maxLength={ENQUIRY_LIMITS.email} disabled={isSending || isSuccess} value={values.email} onChange={(event) => updateValue("email", event.target.value)} placeholder={ENQUIRY_CONTENT.fields.email.placeholder} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? errorId("email") : undefined} className={inputClassName} />
          {errors.email ? <p id={errorId("email")} className="mt-1 text-xs text-danger">{errors.email}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("phone")} className="text-sm font-semibold text-text-primary">{ENQUIRY_CONTENT.fields.phone.label}</label>
          <div className="relative mt-1.5 flex min-h-12 rounded-lg border border-border bg-surface/90 focus-within:border-primary focus-within:ring-[3px] focus-within:ring-primary/35">
            <div ref={countryMenuRef} className="relative shrink-0 border-r border-border">
              <button type="button" onClick={() => setIsCountryMenuOpen((open) => !open)} disabled={isSending || isSuccess} aria-expanded={isCountryMenuOpen} aria-haspopup="listbox" className="flex min-h-12 items-center gap-1 px-3 text-sm font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <span aria-hidden="true">{countryFlag(country)}</span>
                <span>+{getCountryCallingCode(country)}</span>
              </button>
              {isCountryMenuOpen ? (
                <div className="absolute top-[calc(100%+0.5rem)] left-0 z-20 w-72 rounded-lg border border-border bg-surface p-2 shadow-xl">
                  <label className="sr-only" htmlFor={fieldId("country-search")}>{ENQUIRY_CONTENT.countrySearchLabel}</label>
                  <input ref={searchInputRef} id={fieldId("country-search")} type="search" value={countrySearch} onChange={(event) => setCountrySearch(event.target.value)} placeholder={ENQUIRY_CONTENT.countrySearchPlaceholder} className="min-h-11 w-full rounded-md border border-border px-3 text-sm text-text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/25" />
                  <div role="listbox" aria-label={ENQUIRY_CONTENT.countrySearchLabel} className="mt-2 max-h-52 overflow-y-auto">
                    {filteredCountries.length ? filteredCountries.map((item) => (
                      <button key={item} type="button" role="option" aria-selected={country === item} onClick={() => selectCountry(item)} className="flex min-h-11 w-full items-center gap-2 rounded-md px-2 text-left text-sm text-text-primary hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <span aria-hidden="true">{countryFlag(item)}</span>
                        <span className="flex-1">{countryName(item)}</span>
                        <span className="text-text-secondary">+{getCountryCallingCode(item)}</span>
                      </button>
                    )) : <p className="px-2 py-3 text-sm text-text-secondary">{ENQUIRY_CONTENT.noCountriesFound}</p>}
                  </div>
                </div>
              ) : null}
            </div>
            <PhoneInput id={fieldId("phone")} name="phone" autoComplete="tel" country={country} value={values.phone} onChange={(value) => updateValue("phone", value ?? "")} placeholder={ENQUIRY_CONTENT.fields.phone.placeholder} disabled={isSending || isSuccess} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? errorId("phone") : undefined} className="min-w-0 flex-1 bg-transparent px-3 text-sm text-text-primary outline-none placeholder:text-text-secondary/70" />
          </div>
          {errors.phone ? <p id={errorId("phone")} className="mt-1 text-xs text-danger">{errors.phone}</p> : null}
        </div>
        <div>
          <label htmlFor={fieldId("program")} className="text-sm font-semibold text-text-primary">{ENQUIRY_CONTENT.fields.program.label}</label>
          <div className="relative">
            <select id={fieldId("program")} name="program" autoComplete="off" disabled={isSending || isSuccess} value={values.program} onChange={(event) => updateValue("program", event.target.value)} aria-invalid={Boolean(errors.program)} aria-describedby={errors.program ? errorId("program") : undefined} className={`${inputClassName} appearance-none pr-11`}>
              <option value="">{ENQUIRY_CONTENT.selectProgramPlaceholder}</option>
              {ENQUIRY_PROGRAM_OPTIONS.map((option) => <option key={option.value} value={option.label}>{option.label}</option>)}
            </select>
            <Icon name="chevron-down" className="pointer-events-none absolute right-3 bottom-3.5 h-4 w-4 text-primary" />
          </div>
          {errors.program ? <p id={errorId("program")} className="mt-1 text-xs text-danger">{errors.program}</p> : null}
        </div>
      </div>

      <div>
        <div className="flex items-baseline justify-between gap-2">
          <label htmlFor={fieldId("message")} className="text-sm font-semibold text-text-primary">{ENQUIRY_CONTENT.fields.message.label}</label>
          <span id={messageCountId} aria-hidden="true" className="text-xs text-text-secondary">
            {messageCount}/{ENQUIRY_LIMITS.message}
          </span>
        </div>
        <textarea id={fieldId("message")} name="message" rows={3} autoComplete="off" maxLength={ENQUIRY_LIMITS.message} disabled={isSending || isSuccess} value={values.message} onChange={(event) => updateValue("message", event.target.value)} placeholder={ENQUIRY_CONTENT.fields.message.placeholder} aria-invalid={Boolean(errors.message)} aria-describedby={`${messageCountId}${errors.message ? ` ${errorId("message")}` : ""}`} className={`${inputClassName} min-h-24 resize-y py-3`} />
        {errors.message ? <p id={errorId("message")} className="mt-1 text-xs text-danger">{errors.message}</p> : null}
      </div>

      {status === "success" ?<p role="status" className="rounded-lg border border-accent-green/30 bg-accent-green/10 px-3 py-2 text-sm font-medium text-accent-green">{ENQUIRY_CONTENT.messages.success}</p> : null}
      {status === "error" ? <p role="alert" className="rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-sm font-medium text-danger">{submissionError || ENQUIRY_CONTENT.messages.failure}</p> : null}

      <button
        type="submit"
        disabled={isSending || isSuccess}
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-primary/95 px-5 text-sm font-semibold text-text-inverse shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_10px_22px_-8px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark/95 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_14px_28px_-8px_color-mix(in_srgb,var(--color-primary)_75%,transparent)] active:translate-y-0 active:duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSending ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-text-inverse/70 border-t-transparent" aria-hidden="true" />
        ) : (
          <Image
            src="/images/contact/icons/paper-plane-white.webp"
            alt=""
            width={16}
            height={16}
            sizes="16px"
            className="h-4 w-4 object-contain"
          />
        )}
        {isSending ? ENQUIRY_CONTENT.buttons.sending : ENQUIRY_CONTENT.buttons.submit}
      </button>
    </form>
  );
}
