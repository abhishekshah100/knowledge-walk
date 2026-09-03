import type { EnquiryFormValues } from "@/types/enquiry";

export type EnquiryEmailData = EnquiryFormValues & {
  submittedAt: string;
  pageUrl?: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export function createEnquiryEmail(data: EnquiryEmailData) {
  const fields = [
    ["Full name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Program interest", data.program],
    ["Message", data.message || "Not provided"],
    ["Submitted at", data.submittedAt],
    ["Page URL", data.pageUrl || "Not provided"],
  ] as const;

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const rows = fields.map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("");

  return {
    text,
    html: `<main><h1>New Knowledge Walk enquiry</h1><table>${rows}</table></main>`,
  };
}
