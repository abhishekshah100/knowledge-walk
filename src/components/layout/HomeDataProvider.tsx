"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { ApiResponse, HomePageData } from "@/types/site-content.types";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface HomeDataContextValue {
  data: HomePageData | null;
  isLoading: boolean;
  error: string | null;
}

const HomeDataContext = createContext<HomeDataContextValue | null>(null);

/**
 * Fetches the shared `GET /api/home` payload (navigation + home page
 * content) once for the whole app, and renders the site-wide `Header`/
 * `Footer` around `children` here in the root layout instead of inside
 * every page.
 *
 * Layouts persist across client-side navigations — only `children` (the
 * routed page) swaps out — so keeping Header/Footer here means they mount
 * once and never remount when navigating between pages, instead of every
 * page independently rendering (and refetching for) its own copies.
 */
export function HomeDataProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [data, setData] = useState<HomePageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHomePageData() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/home", { signal: controller.signal });
        const result = (await response.json()) as ApiResponse<HomePageData>;

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

    loadHomePageData();

    return () => controller.abort();
  }, []);

  return (
    <HomeDataContext.Provider value={{ data, isLoading, error }}>
      {data ? <Header navigation={data.navigation} /> : null}
      {children}
      {data ? <Footer navigation={data.navigation} /> : null}
    </HomeDataContext.Provider>
  );
}

/**
 * Reads the shared `/api/home` payload fetched once by `HomeDataProvider`.
 * The Home page also uses this for its own `home`/`events`/`stories`/
 * `media` sections, so it never issues a second request for the same data.
 */
export function useHomePageData(): HomeDataContextValue {
  const context = useContext(HomeDataContext);

  if (!context) throw new Error("useHomePageData must be used within a HomeDataProvider.");
  return context;
}
