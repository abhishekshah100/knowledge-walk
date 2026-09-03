import { ENQUIRY_CONTENT } from "@/constants/enquiry";
import type { EnquiryFormValues } from "@/types/enquiry";

type EnquiryApiResponse =
  | { success: true }
  | { success: false; error: string };

export async function sendEnquiry(values: EnquiryFormValues) {
  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...values, pageUrl: window.location.href }),
  });
  let result: EnquiryApiResponse | null = null;

  try {
    result = (await response.json()) as EnquiryApiResponse;
  } catch {
    // A proxy or unexpected server error can return an empty response.
  }

  if (!response.ok || !result?.success) {
    throw new Error(result && !result.success ? result.error : ENQUIRY_CONTENT.messages.failure);
  }
}
