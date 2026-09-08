"use client";

import { useJsonFetch } from "./useJsonFetch";
import type { ContactPageData } from "@/types/site-content.types";

/** Fetches the aggregated `GET /api/contact` payload once when the component mounts. */
export function useContactPageData() {
  return useJsonFetch<ContactPageData>("/api/contact");
}
