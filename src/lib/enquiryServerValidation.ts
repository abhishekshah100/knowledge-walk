import { ENQUIRY_LIMITS } from "@/constants/enquiry";
import type { EnquiryFormValues } from "@/types/enquiry";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const E164_PHONE_PATTERN = /^\+[1-9]\d{6,14}$/;

export function normaliseServerEnquiryValues(values: EnquiryFormValues): EnquiryFormValues {
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    program: values.program.trim(),
    message: values.message.trim(),
  };
}

export function isValidServerEnquiry(values: EnquiryFormValues): boolean {
  // Email is required — kept in lockstep with the client-side rule in
  // `enquiryValidation.ts` so the server never accepts what the form itself
  // would reject.
  const isEmailValid = EMAIL_PATTERN.test(values.email) && values.email.length <= ENQUIRY_LIMITS.email;

  return Boolean(
    values.fullName &&
      values.fullName.length <= ENQUIRY_LIMITS.fullName &&
      isEmailValid &&
      E164_PHONE_PATTERN.test(values.phone) &&
      values.phone.length <= ENQUIRY_LIMITS.phone &&
      values.program &&
      values.message.length <= ENQUIRY_LIMITS.message,
  );
}
