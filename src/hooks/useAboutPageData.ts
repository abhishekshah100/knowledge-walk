"use client";

import { useEffect, useState } from "react";
import type { AboutPageData, ApiResponse } from "@/types/site-content.types";

interface UseAboutPageDataResult {
  data: AboutPageData | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Fetches the aggregated `GET /api/about` payload once when the
 * component mounts, and cancels the in-flight request if it unmounts
 * before the response arrives. Mirrors `useContactPageData`.
 */
export function useAboutPageData(): UseAboutPageDataResult {
  const [data, setData] = useState<AboutPageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadAboutPageData() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/about", { signal: controller.signal });
        const result = (await response.json()) as ApiResponse<AboutPageData>;

        if (!result.success) {
          throw new Error(result.error);
        }

        setData(result.data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }
        setError(err instanceof Error ? err.message : "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    loadAboutPageData();

    return () => controller.abort();
  }, []);

  return { data, isLoading, error };
}
