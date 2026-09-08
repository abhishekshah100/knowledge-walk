"use client";

import { useCallback, useEffect, useState } from "react";
import type { ApiResponse } from "@/types/site-content.types";

interface UseJsonFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  /** Re-runs the fetch from scratch — lets an error state offer a "Retry" action. */
  refetch: () => void;
}

/**
 * Fetches a `{ success, data }` / `{ success, error }` JSON endpoint once
 * when the calling component mounts, and cancels the in-flight request if
 * it unmounts before the response arrives.
 *
 * Every page-data hook (`useAboutPageData`, `useContactPageData`, and the
 * `/api/home` fetch inside `HomeDataProvider`) had this exact
 * fetch/abort/error-handling logic copy-pasted with only the URL and
 * response type changed — this is the one place it now lives.
 */
export function useJsonFetch<T>(url: string): UseJsonFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const refetch = useCallback(() => setAttempt((current) => current + 1), []);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, { signal: controller.signal });
        const result = (await response.json()) as ApiResponse<T>;

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

    load();

    return () => controller.abort();
  }, [url, attempt]);

  return { data, isLoading, error, refetch };
}
