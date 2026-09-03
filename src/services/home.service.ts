import { navigationData } from "@/data/navigation.data";
import { homeData } from "@/data/home.data";
import { eventsData } from "@/data/events.data";
import { storiesData } from "@/data/stories.data";
import { mediaData } from "@/data/media.data";
import type {
  EventsContent,
  HomeContent,
  HomePageData,
  MediaContent,
  NavigationContent,
  StoriesContent,
} from "@/types/site-content.types";

/**
 * Data-access layer for the home page.
 *
 * Every section is fetched through its own function and everything is
 * `async`, even though the current implementation just reads static data
 * files. This keeps the surface area future-proof: swapping a function's
 * body for a database call (or a CMS/API request) later will not require
 * any change to `getHomePageData`, the `/api/home` route, or the frontend.
 */

async function getNavigation(): Promise<NavigationContent> {
  return navigationData;
}

async function getHome(): Promise<HomeContent> {
  return homeData;
}

async function getEvents(): Promise<EventsContent> {
  return eventsData;
}

async function getStories(): Promise<StoriesContent> {
  return storiesData;
}

async function getMedia(): Promise<MediaContent> {
  return mediaData;
}

/** Aggregates every section required to render the home page. */
export async function getHomePageData(): Promise<HomePageData> {
  const [navigation, home, events, stories, media] = await Promise.all([
    getNavigation(),
    getHome(),
    getEvents(),
    getStories(),
    getMedia(),
  ]);

  return { navigation, home, events, stories, media };
}
