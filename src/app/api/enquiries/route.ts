import { Resend } from "resend";
import { ENQUIRY_CONTENT } from "@/constants/enquiry";
import { createEnquiryEmail } from "@/lib/enquiryEmailTemplate";
import {
  isValidServerEnquiry,
  normaliseServerEnquiryValues,
} from "@/lib/enquiryServerValidation";
import type { EnquiryFormValues } from "@/types/enquiry";

export const runtime = "nodejs";

type EnquiryRequestPayload = EnquiryFormValues & {
  pageUrl?: string;
};

function isEnquiryRequestPayload(value: unknown): value is EnquiryRequestPayload {
  if (!value || typeof value !== "object") return false;

  const payload = value as Record<string, unknown>;
  return ["fullName", "email", "phone", "program", "message"].every((field) => typeof payload[field] === "string")
    && (payload.pageUrl === undefined || typeof payload.pageUrl === "string");
}

function formatResendError(error: unknown): string {
  if (!error || typeof error !== "object") return String(error);

  const details = error as { message?: unknown; name?: unknown; statusCode?: unknown };
  return JSON.stringify({
    name: details.name,
    message: details.message,
    statusCode: details.statusCode,
  });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false, error: ENQUIRY_CONTENT.messages.failure }, { status: 400 });
  }

  if (!isEnquiryRequestPayload(payload)) {
    return Response.json({ success: false, error: ENQUIRY_CONTENT.messages.failure }, { status: 400 });
  }

  const values = normaliseServerEnquiryValues(payload);

  if (!isValidServerEnquiry(values)) {
    return Response.json({ success: false, error: ENQUIRY_CONTENT.messages.failure }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.RESEND_OWNER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !ownerEmail || !fromEmail) {
    console.error("Missing Resend server configuration.");
    return Response.json({ success: false, error: ENQUIRY_CONTENT.messages.configuration }, { status: 503 });
  }

  try {
    const email = createEnquiryEmail({
      ...values,
      pageUrl: payload.pageUrl,
      submittedAt: new Date().toISOString(),
    });
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [ownerEmail],
      replyTo: values.email,
      subject: `New enquiry from ${values.fullName}`,
      ...email,
    });

    if (!error) {
      return Response.json({ success: true });
    }

    console.error(`Resend failed to send enquiry: ${formatResendError(error)}`);
    return Response.json({ success: false, error: ENQUIRY_CONTENT.messages.failure }, { status: 502 });
  } catch (error) {
    console.error(`Unexpected error while sending enquiry: ${formatResendError(error)}`);
    return Response.json({ success: false, error: ENQUIRY_CONTENT.messages.failure }, { status: 502 });
  }
}
