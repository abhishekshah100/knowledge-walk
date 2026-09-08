"use client";

import { useJsonFetch } from "./useJsonFetch";
import type { AboutPageData } from "@/types/site-content.types";

/** Fetches the aggregated `GET /api/about` payload once when the component mounts. */
export function useAboutPageData() {
  return useJsonFetch<AboutPageData>("/api/about");
}
