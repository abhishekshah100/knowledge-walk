import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EnquiryProvider } from "@/components/enquiry/EnquiryProvider";
import { siteMetaData } from "@/data/home.data";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetaData.title,
  description: siteMetaData.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><EnquiryProvider>{children}</EnquiryProvider></body>
    </html>
  );
}
