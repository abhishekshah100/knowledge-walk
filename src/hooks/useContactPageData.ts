"use client";

import { useEffect, useState } from "react";
import type { ApiResponse, ContactPageData } from "@/types/site-content.types";

interface UseContactPageDataResult {
  data: ContactPageData | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Fetches the aggregated `GET /api/contact` payload once when the
 * component mounts, and cancels the in-flight request if it unmounts
 * before the response arrives. Mirrors `useHomePageData`.
 */
export function useContactPageData(): UseContactPageDataResult {
  const [data, setData] = useState<ContactPageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContactPageData() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/contact", { signal: controller.signal });
        const result = (await response.json()) as ApiResponse<ContactPageData>;

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

    loadContactPageData();

    return () => controller.abort();
  }, []);

  return { data, isLoading, error };
}
