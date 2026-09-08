import type {
  AboutHeroContent,
  AboutStoryContent,
  OurJourneyContent,
  OurTeamContent,
  OurValuesContent,
} from "@/types/site-content.types";

const PHOTOS_DIR = "/images/about/photos";
const ICONS_DIR = "/images/about/icons";

/** Content for the About Us page's first section — the intro hero. */
export const aboutHeroData: AboutHeroContent = {
  breadcrumbLabel: "About Us",
  badge: "About Knowledge Walk",
  heading: "Knowledge That Inspires. Leadership That Serves.",
  description:
    "Knowledge Walk is a youth-led platform helping young minds learn deeply, lead responsibly, and create meaningful change.",
  primaryCta: { label: "Discover Our Journey", href: "#our-journey" },
  secondaryCta: { label: "Meet Our Team", href: "#our-team" },
  image: {
    src: `${PHOTOS_DIR}/hero-students.webp`,
    alt: "Knowledge Walk students collaborating around a laptop",
    width: 1280,
    height: 700,
  },
};

/** Content for the About Us page's second section — "Our Story". */
export const aboutStoryData: AboutStoryContent = {
  badge: "Our Story",
  heading: "A Movement Built Around Knowledge",
  paragraphs: [
    "Knowledge Walk is a youth-led nation-building platform that brings together learning, leadership, heritage, civil-service guidance and community action. We create spaces where young people can learn from experts, engage in meaningful dialogues, explore our cultural roots, and work on solutions for a stronger, more inclusive India.",
    "Through programs like Mission IAS, Heritage Conclaves, youth dialogues and grassroots initiatives, we aim to nurture informed, compassionate and active citizens who are ready to lead with integrity and serve society.",
  ],
  quote: {
    quote: "When knowledge is shared with purpose, it becomes a force for change.",
    attribution: "The Knowledge Walk Team",
  },
  values: [
    { icon: { src: `${ICONS_DIR}/story-learn-deeply.webp`, alt: "", width: 64, height: 64 }, label: "Learn Deeply" },
    { icon: { src: `${ICONS_DIR}/story-lead-responsibly.webp`, alt: "", width: 64, height: 64 }, label: "Lead Responsibly" },
    { icon: { src: `${ICONS_DIR}/story-serve-meaningfully.webp`, alt: "", width: 64, height: 64 }, label: "Serve Meaningfully" },
  ],
  images: [
    {
      src: `${PHOTOS_DIR}/story-mentor-discussion.webp`,
      alt: "A mentor leading a discussion — Better Questions, Brighter Futures",
      width: 800,
      height: 500,
    },
    {
      src: `${PHOTOS_DIR}/story-students-conversation.webp`,
      alt: "Students in conversation on campus steps",
      width: 800,
      height: 600,
    },
    {
      src: `${PHOTOS_DIR}/story-young-leader-speaking.webp`,
      alt: "A young leader speaking to a group — Learn, Dialogue, Serve, Belong",
      width: 640,
      height: 900,
    },
  ],
};

/** Content for the About Us page's third section — "Our Values". */
export const ourValuesData: OurValuesContent = {
  badge: "Our Values",
  heading: "The Values We Walk With",
  subtitle: "Principles that shape every program, conversation, and community initiative.",
  values: [
    {
      icon: { src: `${ICONS_DIR}/value-knowledge.webp`, alt: "", width: 64, height: 64 },
      title: "Knowledge",
      description: "Stay curious. Think deeply.",
    },
    {
      icon: { src: `${ICONS_DIR}/value-integrity.webp`, alt: "", width: 64, height: 64 },
      title: "Integrity",
      description: "Choose what is right.",
    },
    {
      icon: { src: `${ICONS_DIR}/value-service.webp`, alt: "", width: 64, height: 64 },
      title: "Service",
      description: "Create value for others.",
    },
    {
      icon: { src: `${ICONS_DIR}/value-inclusion.webp`, alt: "", width: 64, height: 64 },
      title: "Inclusion",
      description: "Make every voice count.",
    },
    {
      icon: { src: `${ICONS_DIR}/value-heritage.webp`, alt: "", width: 64, height: 64 },
      title: "Heritage",
      description: "Stay connected to our roots.",
    },
  ],
};

/** Content for the About Us page's fourth section — "Our Journey". */
export const ourJourneyData: OurJourneyContent = {
  badge: "Our Journey",
  heading: "Our Journey",
  subtitle: "From a shared idea to a growing community of learners and changemakers.",
  milestones: [
    {
      icon: { src: `${ICONS_DIR}/journey-beginning.webp`, alt: "", width: 64, height: 64 },
      title: "The Beginning",
      description: "A shared belief in knowledge-led change",
    },
    {
      icon: { src: `${ICONS_DIR}/journey-first-conversations.webp`, alt: "", width: 64, height: 64 },
      title: "First Conversations",
      description: "Youth dialogues and mentoring circles",
    },
    {
      icon: { src: `${ICONS_DIR}/journey-expanding-pathways.webp`, alt: "", width: 64, height: 64 },
      title: "Expanding Pathways",
      description: "Mission IAS, heritage and community programs",
    },
    {
      icon: { src: `${ICONS_DIR}/journey-growing-together.webp`, alt: "", width: 64, height: 64 },
      title: "Growing Together",
      description: "A wider network of learners and changemakers",
    },
  ],
  image: {
    src: `${PHOTOS_DIR}/journey-community-discussion.webp`,
    alt: "Students in a community discussion circle in front of a heritage building",
    width: 960,
    height: 471,
  },
};

/** Content for the About Us page's fifth (currently last) section — "Our Team". */
export const ourTeamData: OurTeamContent = {
  badge: "Our Team",
  heading: "Meet Our Team",
  subtitle: "The people building Knowledge Walk, one conversation at a time.",
  members: [
    {
      photo: { src: `${PHOTOS_DIR}/team-ananya-sharma.webp`, alt: "Ananya Sharma", width: 512, height: 349 },
      name: "Ananya Sharma",
      role: "Program Lead",
      quote: "More young voices, stronger solutions.",
    },
    {
      photo: { src: `${PHOTOS_DIR}/team-rohan-mehta.webp`, alt: "Rohan Mehta", width: 512, height: 355 },
      name: "Rohan Mehta",
      role: "Mentor",
      quote: "Curiosity today, stronger India tomorrow.",
    },
    {
      photo: { src: `${PHOTOS_DIR}/team-megha-iyer.webp`, alt: "Megha Iyer", width: 512, height: 346 },
      name: "Megha Iyer",
      role: "Community Volunteer",
      quote: "Service gives meaning to what we learn.",
    },
    {
      photo: { src: `${PHOTOS_DIR}/team-dr-arvind-rao.webp`, alt: "Dr. Arvind Rao", width: 512, height: 616 },
      name: "Dr. Arvind Rao",
      role: "Founder & Mentor",
      quote: "Knowledge finds its true purpose only in service.",
    },
  ],
};
