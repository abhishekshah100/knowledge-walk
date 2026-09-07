import { contactHeroData, faqData, howCanWeHelpData, officeLocationData } from "@/data/contact.data";
import type {
  ContactHeroContent,
  ContactPageData,
  FaqContent,
  HowCanWeHelpContent,
  OfficeLocationContent,
} from "@/types/site-content.types";

/**
 * Data-access layer for the Contact Us page. Mirrors `home.service.ts`:
 * async today over a static file, ready to become a database/CMS call
 * later without touching the route or the frontend.
 */

async function getContactHero(): Promise<ContactHeroContent> {
  return contactHeroData;
}

async function getOfficeLocation(): Promise<OfficeLocationContent> {
  return officeLocationData;
}

async function getHowCanWeHelp(): Promise<HowCanWeHelpContent> {
  return howCanWeHelpData;
}

async function getFaq(): Promise<FaqContent> {
  return faqData;
}

/** Aggregates every section required to render the Contact Us page. */
export async function getContactPageData(): Promise<ContactPageData> {
  const [contactHero, officeLocation, howCanWeHelp, faq] = await Promise.all([
    getContactHero(),
    getOfficeLocation(),
    getHowCanWeHelp(),
    getFaq(),
  ]);
  return { contactHero, officeLocation, howCanWeHelp, faq };
}
