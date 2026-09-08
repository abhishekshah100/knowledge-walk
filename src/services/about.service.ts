import { aboutHeroData, aboutStoryData, ourJourneyData, ourTeamData, ourValuesData } from "@/data/about.data";
import type {
  AboutHeroContent,
  AboutPageData,
  AboutStoryContent,
  OurJourneyContent,
  OurTeamContent,
  OurValuesContent,
} from "@/types/site-content.types";

/**
 * Data-access layer for the About Us page. Mirrors `contact.service.ts`:
 * async today over static files, ready to become a database/CMS call
 * later without touching the route or the frontend.
 */

async function getAboutHero(): Promise<AboutHeroContent> {
  return aboutHeroData;
}

async function getAboutStory(): Promise<AboutStoryContent> {
  return aboutStoryData;
}

async function getOurValues(): Promise<OurValuesContent> {
  return ourValuesData;
}

async function getOurJourney(): Promise<OurJourneyContent> {
  return ourJourneyData;
}

async function getOurTeam(): Promise<OurTeamContent> {
  return ourTeamData;
}

/** Aggregates every section required to render the About Us page. */
export async function getAboutPageData(): Promise<AboutPageData> {
  const [hero, story, values, journey, team] = await Promise.all([
    getAboutHero(),
    getAboutStory(),
    getOurValues(),
    getOurJourney(),
    getOurTeam(),
  ]);
  return { hero, story, values, journey, team };
}
