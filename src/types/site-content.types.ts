/**
 * Shared content types for the Knowledge Walk site.
 *
 * These types describe the shape of data returned by the internal data
 * layer (currently static files under `src/data`, later a database) and
 * consumed through the `/api/home` route. Keeping every content shape in
 * one place makes it easy to see what the frontend can rely on and keeps
 * data files and API responses in sync.
 */

// ---------------------------------------------------------------------------
// Generic API envelope
// ---------------------------------------------------------------------------

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LinkItem {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Navigation (header + footer)
// ---------------------------------------------------------------------------

export interface FooterLinkGroup {
  title: string;
  links: LinkItem[];
}

export interface SocialLink {
  platform: string;
  href: string;
  image: ImageAsset;
}

export interface NavigationContent {
  brandName: string;
  brandShortName: string;
  logo: ImageAsset;
  primaryLinks: LinkItem[];
  ctaLabel: string;
  ctaHref: string;
  footer: {
    tagline: string;
    linkGroups: FooterLinkGroup[];
    socialLinks: SocialLink[];
    legalLinks: LinkItem[];
    copyright: string;
  };
}

// ---------------------------------------------------------------------------
// Home page sections
// ---------------------------------------------------------------------------

export interface HeroSlide {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  image: ImageAsset;
}

export interface HeroContent {
  slides: HeroSlide[];
}

export interface StatItem {
  image: ImageAsset;
  value: string;
  label: string;
}

export interface StatsSectionContent {
  heading: string;
  stats: StatItem[];
}

export type PillarAccent = "primary" | "green" | "gold" | "purple";

export interface PillarProject {
  image: ImageAsset;
  accent: PillarAccent;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface PillarProjectsContent {
  heading: string;
  subtitle: string;
  projects: PillarProject[];
}

export interface LeadershipPillar {
  pathIcon: ImageAsset;
  icon: ImageAsset;
  accent: PillarAccent;
  label: string;
  title: string;
  description: string;
}

export interface BuildingLeadersContent {
  heading: string;
  description: string;
  images: ImageAsset[];
  pillars: LeadershipPillar[];
  cta: LinkItem;
}

export interface MissionStep {
  step: number;
  icon: ImageAsset;
  title: string;
  description: string;
}

export interface DashboardPreview {
  title: string;
  progressLabel: string;
  progressPercent: number;
  planItems: string[];
  mentorNote: string;
}

export interface MissionIasContent {
  eyebrow: string;
  heading: string;
  description: string;
  steps: MissionStep[];
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  image: ImageAsset;
  dashboardPreview: DashboardPreview;
}

export interface HeritageHighlight {
  icon: ImageAsset;
  title: string;
  description: string;
}

export interface HeritageConclaveContent {
  heading: string;
  description: string;
  cta: LinkItem;
  image: ImageAsset;
  highlights: HeritageHighlight[];
}

export interface IdeaInMotion {
  title: string;
  description: string;
  image: ImageAsset;
  icon: ImageAsset;
}

export interface IdeasInMotionContent {
  heading: string;
  items: IdeaInMotion[];
}

export interface PartnersIntroContent {
  heading: string;
  description: string;
}

export interface FinalCtaContent {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  image: ImageAsset;
}

export interface HomeContent {
  hero: HeroContent;
  stats: StatsSectionContent;
  pillarProjects: PillarProjectsContent;
  buildingLeaders: BuildingLeadersContent;
  missionIas: MissionIasContent;
  heritageConclave: HeritageConclaveContent;
  ideasInMotion: IdeasInMotionContent;
  partnersIntro: PartnersIntroContent;
  finalCta: FinalCtaContent;
}

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

export interface EventItem {
  id: string;
  day: string;
  month: string;
  tag: string;
  title: string;
  description: string;
  time: string;
  location: string;
  status: string;
  image: ImageAsset;
  href: string;
}

export interface EventsContent {
  heading: string;
  events: EventItem[];
}

// ---------------------------------------------------------------------------
// Stories / testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: ImageAsset;
}

export interface StoriesContent {
  heading: string;
  testimonials: Testimonial[];
}

// ---------------------------------------------------------------------------
// Media (gallery + partner logos)
// ---------------------------------------------------------------------------

export type GalleryItemType = "video" | "image";

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  title: string;
  duration?: string;
  thumbnail: ImageAsset;
}

export interface PartnerLogo {
  name: string;
  logo: ImageAsset;
}

export interface MediaContent {
  gallery: {
    heading: string;
    subtitle: string;
    items: GalleryItem[];
  };
  partners: {
    heading: string;
    description: string;
    logos: PartnerLogo[];
  };
}

// ---------------------------------------------------------------------------
// Aggregated payload returned by GET /api/home
// ---------------------------------------------------------------------------

export interface HomePageData {
  navigation: NavigationContent;
  home: HomeContent;
  events: EventsContent;
  stories: StoriesContent;
  media: MediaContent;
}
