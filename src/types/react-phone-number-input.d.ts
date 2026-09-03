declare module "react-phone-number-input" {
  import type { ComponentType, InputHTMLAttributes } from "react";

  export type Country = string;
  export function getCountries(): Country[];
  export function getCountryCallingCode(country: Country): string;
  export function isValidPhoneNumber(value: string): boolean;
  export const PhoneInput: ComponentType<
    Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & {
      country?: Country;
      international?: boolean;
      withCountryCallingCode?: boolean;
      value?: string;
      onChange?: (value?: string) => void;
    }
  >;
}

declare module "react-phone-number-input/input" {
  import type { ComponentType, InputHTMLAttributes } from "react";
  import type { Country } from "react-phone-number-input";

  const PhoneInput: ComponentType<
    Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & {
      country?: Country;
      international?: boolean;
      withCountryCallingCode?: boolean;
      value?: string;
      onChange?: (value?: string) => void;
    }
  >;

  export default PhoneInput;
}
