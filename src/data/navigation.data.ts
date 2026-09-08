import {
  ORG_ADDRESS_SHORT,
  ORG_EMAIL,
  ORG_EMAIL_HREF,
  ORG_OFFICE_HOURS_INLINE,
  ORG_PHONE_DISPLAY,
  ORG_PHONE_HREF,
} from "@/constants/organization";
import type { NavigationContent } from "@/types/site-content.types";

/**
 * Header and footer navigation content.
 * This is the single source of truth for nav labels/links — components
 * must not hard-code navigation copy.
 */
export const navigationData: NavigationContent = {
  brandName: "Knowledge Walk",
  brandShortName: "KW",
  // Real intrinsic ratio (the SVG's own viewBox is 512x320 = 1.6:1) — kept
  // accurate so `next/image`'s aspect-ratio check doesn't flag a mismatch
  // wherever a component only overrides one CSS dimension (e.g. `h-10 w-auto`).
  logo: { src: "/images/brand/knowledge-walk-logo.svg", alt: "Knowledge Walk logo", width: 64, height: 40 },
  primaryLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Mission IAS 2026", href: "/#mission-ias-2026" },
    //{ label: "Heritage Conclaves", href: "/#heritage-conclaves" },
    { label: "Upcoming Events", href: "/#upcoming-events" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  ctaLabel: "Join the Movement",
  ctaHref: "#",
  footer: {
    tagline:
      "Empowering young minds through knowledge, leadership and service to build a better, stronger and more inclusive India.",
    linkGroups: [
      {
        title: "Pillar Projects",
        links: [
          { label: "Mission IAS 2026", href: "/#mission-ias-2026" },
          { label: "Youth Conclaves", href: "#" },
          { label: "Heritage Conclaves", href: "/#heritage-conclaves" },
          { label: "Other Activities", href: "#" },
        ],
      },
      // {
      //   title: "Explore",
      //   links: [
      //     { label: "About Us", href: "/about-us" },
      //     { label: "Upcoming Events", href: "/#upcoming-events" },
      //     { label: "Our Activities", href: "#" },
      //     { label: "Gallery", href: "#" },
      //   ],
      // },
      {
        title: "Resources",
        links: [
          { label: "News & Media", href: "#" },
          { label: "FAQs", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Use", href: "#" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: ORG_EMAIL, href: ORG_EMAIL_HREF },
          { label: ORG_PHONE_DISPLAY, href: ORG_PHONE_HREF },
          { label: ORG_ADDRESS_SHORT, href: "#" },
          { label: ORG_OFFICE_HOURS_INLINE, href: "#" },
        ],
      },
    ],
    socialLinks: [
      { platform: "Facebook", href: "https://www.facebook.com/", image: { src: "/images/social/facebook.svg", alt: "Facebook", width: 24, height: 24 } },
      { platform: "X", href: "https://x.com/", image: { src: "/images/social/Twitter-X.svg", alt: "X", width: 24, height: 24 } },
      { platform: "LinkedIn", href: "https://in.linkedin.com/", image: { src: "/images/social/linkedin.svg", alt: "LinkedIn", width: 24, height: 24 } },
      { platform: "Instagram", href: "https://www.instagram.com/?hl=en", image: { src: "/images/social/instagram.svg", alt: "Instagram", width: 24, height: 24 } },
      { platform: "YouTube", href: "https://www.youtube.com/", image: { src: "/images/social/youtube.svg", alt: "YouTube", width: 24, height: 24 } },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      // { label: "Refund Policy", href: "#" },
    ],
    copyright: "© 2026 Knowledge Walk. All rights reserved.",
  },
};
