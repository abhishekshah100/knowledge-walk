import type { EnquiryFormValues, ProgramOption } from "@/types/enquiry";

export const ENQUIRY_PROGRAM_OPTIONS: ProgramOption[] = [
  { value: "mission-ias-2026", label: "Mission IAS 2026" },
  { value: "youth-conclaves", label: "Youth Conclaves" },
  { value: "heritage-conclaves", label: "Heritage Conclaves" },
  { value: "knowledge-walk", label: "Knowledge Walk" },
  { value: "other-activities", label: "Other Activities" },
  { value: "upcoming-events", label: "Upcoming Events" },
  { value: "program-enquiries", label: "Program Enquiries" },
  { value: "partnerships", label: "Partnerships & Collaborations" },
  { value: "general-enquiry", label: "General Enquiry" },
];

export const ENQUIRY_LIMITS = {
  fullName: 80,
  email: 120,
  phone: 24,
  message: 800,
} as const;

export const ENQUIRY_CONTENT = {
  title: "Begin your Knowledge Walk",
  description: "Tell us what you are interested in and our team will be in touch.",
  closeLabel: "Close enquiry form",
  countrySearchLabel: "Search country or calling code",
  countrySearchPlaceholder: "Search country or code",
  noCountriesFound: "No countries found.",
  selectProgramPlaceholder: "Choose a program",
  fields: {
    fullName: { label: "Full name", placeholder: "Your full name" },
    email: { label: "Email address", placeholder: "Your email address" },
    phone: { label: "Phone number", placeholder: "98765 43210" },
    program: { label: "Program interest" },
    message: { label: "Message (optional)", placeholder: "How can we help?" },
  },
  buttons: {
    trigger: "Join the Movement",
    submit: "Send enquiry",
    sending: "Sending...",
  },
  messages: {
    success: "Thank you. Your enquiry has been sent successfully.",
    failure: "We could not send your enquiry. Please try again.",
    configuration: "The enquiry service is not configured yet. Please try again later.",
  },
  validation: {
    requiredName: "Please enter your full name.",
    invalidName: "Please enter a valid full name.",
    requiredEmail: "Please enter your email address.",
    invalidEmail: "Please enter a valid email address.",
    requiredPhone: "Please enter your phone number.",
    invalidPhone: "Please enter a valid international phone number.",
    requiredProgram: "Please select a program.",
    messageTooLong: "Your message is too long.",
  },
} as const;

export const INITIAL_ENQUIRY_VALUES: EnquiryFormValues = {
  fullName: "",
  email: "",
  phone: "",
  program: "",
  message: "",
};

export const ENQUIRY_DEFAULT_COUNTRY = "IN";

export const ENQUIRY_EMAIL_TEMPLATE_KEYS = {
  fullName: "full_name",
  email: "email_address",
  phone: "phone_number",
  program: "program_interest",
  message: "message",
  submittedAt: "submission_date_time",
  pageUrl: "page_url",
} as const;
