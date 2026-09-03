export interface EnquiryFormValues {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  message: string;
}

export type EnquiryFieldName = keyof EnquiryFormValues;
export type EnquiryErrors = Partial<Record<EnquiryFieldName, string>>;

export interface ProgramOption {
  value: string;
  label: string;
}
