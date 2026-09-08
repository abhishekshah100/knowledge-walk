import type { Metadata } from "next";
import { EnquiryProvider } from "@/components/enquiry/EnquiryProvider";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import { HomeDataProvider } from "@/components/layout/HomeDataProvider";
import { siteMetaData } from "@/data/home.data";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
  icons: {
    icon: [
      { url: "/images/brand/knowledge-walk-logo.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/images/brand/logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/images/brand/logo.png",
    apple: "/images/brand/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <head>
        {/*
          `next/font/google` is loaded via Turbopack's internal font loader,
          which depends on an internal `@vercel/turbopack-next` package that
          isn't present in this project's node_modules — using it throws a
          hard "Module not found" build error on every page. A plain <link>
          sidesteps that loader entirely: same fonts (Roboto + Playfair
          Display), just fetched the classic way instead of self-hosted.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/*
          First focusable element on every page. Invisible until it receives
          keyboard focus (Tab from a fresh page load), so sighted mouse users
          never see it, but a keyboard/screen-reader user can jump straight
          past the header's nav links to the actual page content.
        */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-text-inverse focus:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <EnquiryProvider>
          <HomeDataProvider>{children}</HomeDataProvider>
          <FloatingContactButtons />
        </EnquiryProvider>
      </body>
    </html>
  );
}
