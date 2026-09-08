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

export interface MediaContent {
  gallery: {
    heading: string;
    subtitle: string;
    items: GalleryItem[];
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

// ---------------------------------------------------------------------------
// Contact page — "Connect With Us" hero + enquiry form
// ---------------------------------------------------------------------------

export type ContactAccent = "primary" | "green" | "purple";

export interface ContactMethod {
  icon: ImageAsset;
  accent: ContactAccent;
  title: string;
  description: string;
  value: string;
  href: string;
}

export interface ContactChannel {
  icon: ImageAsset;
  accent: ContactAccent;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export interface OfficeHours {
  icon: ImageAsset;
  title: string;
  lines: string[];
}

export interface ContactFormContent {
  heading: string;
  subtitle: string;
  responseNote: string;
}

export interface ContactHeroContent {
  heading: string;
  description: string;
  methods: ContactMethod[];
  whatsapp: ContactChannel;
  officeHours: OfficeHours;
  form: ContactFormContent;
}

// ---------------------------------------------------------------------------
// Contact page — "Find Us on the Map" section
// ---------------------------------------------------------------------------

export interface OfficeDetailItem {
  icon: ImageAsset;
  title: string;
  lines: string[];
}

export interface OfficeLocationContent {
  heading: string;
  mapEmbedSrc: string;
  mapTitle: string;
  directionsLabel: string;
  directionsHref: string;
  markerIcon: ImageAsset;
  officeBrand: string;
  officeName: string;
  addressLines: string[];
  details: OfficeDetailItem[];
}

// ---------------------------------------------------------------------------
// Contact page — "How Can We Help?" + "Frequently Asked Questions"
// ---------------------------------------------------------------------------

export interface HelpTopic {
  icon: ImageAsset;
  title: string;
  description: string;
  /** Matches one of `ENQUIRY_PROGRAM_OPTIONS`'s labels — clicking the topic preselects this in the enquiry form. */
  programOption?: string;
}

export interface HowCanWeHelpContent {
  heading: string;
  subtitle: string;
  topics: HelpTopic[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  heading: string;
  subtitle: string;
  items: FaqItem[];
}

// ---------------------------------------------------------------------------
// Aggregated payload returned by GET /api/contact
// ---------------------------------------------------------------------------

export interface ContactPageData {
  contactHero: ContactHeroContent;
  officeLocation: OfficeLocationContent;
  howCanWeHelp: HowCanWeHelpContent;
  faq: FaqContent;
}

// ---------------------------------------------------------------------------
// About page — hero + "Our Story"
// ---------------------------------------------------------------------------

export interface AboutHeroContent {
  /** Current-page label for the breadcrumb, e.g. "About Us". */
  breadcrumbLabel: string;
  badge: string;
  heading: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  image: ImageAsset;
}

export interface StoryValue {
  icon: ImageAsset;
  label: string;
}

export interface StoryQuote {
  quote: string;
  attribution: string;
}

export interface AboutStoryContent {
  badge: string;
  heading: string;
  paragraphs: string[];
  quote: StoryQuote;
  values: StoryValue[];
  /** Feeds `ImageCollage`: two stacked landscape photos + one tall portrait. */
  images: ImageAsset[];
}

// ---------------------------------------------------------------------------
// About page — "Our Values"
// ---------------------------------------------------------------------------

export interface ValueItem {
  icon: ImageAsset;
  title: string;
  description: string;
}

export interface OurValuesContent {
  badge: string;
  heading: string;
  subtitle: string;
  values: ValueItem[];
}

// ---------------------------------------------------------------------------
// About page — "Our Journey"
// ---------------------------------------------------------------------------

export interface JourneyMilestone {
  icon: ImageAsset;
  title: string;
  description: string;
}

export interface OurJourneyContent {
  badge: string;
  heading: string;
  subtitle: string;
  milestones: JourneyMilestone[];
  image: ImageAsset;
}

// ---------------------------------------------------------------------------
// About page — "Our Team"
// ---------------------------------------------------------------------------

export interface TeamMember {
  photo: ImageAsset;
  name: string;
  role: string;
  quote: string;
}

export interface OurTeamContent {
  badge: string;
  heading: string;
  subtitle: string;
  members: TeamMember[];
}

// ---------------------------------------------------------------------------
// Aggregated payload returned by GET /api/about
// ---------------------------------------------------------------------------

export interface AboutPageData {
  hero: AboutHeroContent;
  story: AboutStoryContent;
  values: OurValuesContent;
  journey: OurJourneyContent;
  team: OurTeamContent;
}
