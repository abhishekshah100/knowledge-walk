import { isValidPhoneNumber } from "react-phone-number-input";
import { ENQUIRY_CONTENT, ENQUIRY_LIMITS } from "@/constants/enquiry";
import type { EnquiryErrors, EnquiryFormValues } from "@/types/enquiry";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normaliseEnquiryValues(values: EnquiryFormValues): EnquiryFormValues {
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    program: values.program.trim(),
    message: values.message.trim(),
  };
}

export function validateEnquiry(values: EnquiryFormValues): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (!values.fullName) errors.fullName = ENQUIRY_CONTENT.validation.requiredName;
  else if (values.fullName.length > ENQUIRY_LIMITS.fullName) errors.fullName = ENQUIRY_CONTENT.validation.invalidName;

  if (!values.email) errors.email = ENQUIRY_CONTENT.validation.requiredEmail;
  else if (!EMAIL_PATTERN.test(values.email) || values.email.length > ENQUIRY_LIMITS.email) {
    errors.email = ENQUIRY_CONTENT.validation.invalidEmail;
  }

  if (!values.phone) errors.phone = ENQUIRY_CONTENT.validation.requiredPhone;
  else if (values.phone.length > ENQUIRY_LIMITS.phone || !isValidPhoneNumber(values.phone)) {
    errors.phone = ENQUIRY_CONTENT.validation.invalidPhone;
  }

  if (!values.program) errors.program = ENQUIRY_CONTENT.validation.requiredProgram;
  if (values.message.length > ENQUIRY_LIMITS.message) errors.message = ENQUIRY_CONTENT.validation.messageTooLong;

  return errors;
}
