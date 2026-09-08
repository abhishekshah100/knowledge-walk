import type { HomeContent } from "@/types/site-content.types";

/** Document `<title>` / meta description for the home page. */
export const siteMetaData = {
  title: "Knowledge Walk — Where Knowledge Inspires Action",
  description:
    "Knowledge Walk empowers young minds through civil services guidance, meaningful conclaves, heritage learning and community initiatives.",
};

/** All content for the home page, section by section, top to bottom. */
export const homeData: HomeContent = {
  hero: {
    slides: [
      {
        eyebrow: "Knowledge • Leadership • Nation Building",
        heading: "Where Knowledge Inspires Action",
        description:
          "Empowering young minds through civil services guidance, meaningful conclaves, heritage learning and community initiatives.",
        primaryCta: { label: "Explore Our Projects", href: "#" },
        secondaryCta: { label: "View Upcoming Events", href: "/#upcoming-events" },
        image: {
          src: "/images/hero/hero-slide-1.png",
          alt: "Youth leaders collaborating at a Knowledge Walk session",
          width: 1983,
          height: 793,
        },
      },
      {
        eyebrow: "Civil Services • Mentorship • Purpose",
        heading: "Preparing Tomorrow's Public Servants",
        description:
          "Structured mentorship, expert guidance and disciplined preparation for Prelims, Mains and Interview, built around a public-service mindset.",
        primaryCta: { label: "Explore Mission IAS", href: "/#mission-ias-2026" },
        secondaryCta: { label: "View Upcoming Events", href: "/#upcoming-events" },
        image: {
          src: "/images/hero/hero-slide-2.png",
          alt: "Student preparing for the Mission IAS 2026 program",
          width: 1774,
          height: 887,
        },
      },
      {
        eyebrow: "Culture • Identity • Living Traditions",
        heading: "Rediscovering India's Living Heritage",
        description:
          "Heritage conclaves that connect young scholars to civilizational wisdom, art, architecture and cultural memory.",
        primaryCta: { label: "Heritage Conclaves", href: "/#heritage-conclaves" },
        secondaryCta: { label: "View Upcoming Events", href: "/#upcoming-events" },
        image: {
          src: "/images/hero/hero-slide-3.png",
          alt: "Students exploring heritage architecture together",
          width: 1774,
          height: 887,
        },
      },
    ],
  },

  stats: {
    heading: "Growing Ideas Into Impact",
    stats: [
      {
        image: {
          src: "/images/growing-ideas/growing-ideas1.png",
          alt: "Two glossy figures representing the young minds Knowledge Walk reaches",
          width: 1254,
          height: 1254,
        },
        value: "10,000+",
        label: "Young Minds",
      },
      {
        image: {
          src: "/images/growing-ideas/growing-ideas2.png",
          alt: "A glossy institution building icon",
          width: 1254,
          height: 1254,
        },
        value: "100+",
        label: "Institutions",
      },
      {
        image: {
          src: "/images/growing-ideas/growing-ideas3.png",
          alt: "A glossy calendar icon",
          width: 1254,
          height: 1254,
        },
        value: "50+",
        label: "Events",
      },
      {
        image: {
          src: "/images/growing-ideas/growing-ideas4.png",
          alt: "A glossy figure representing a mentor",
          width: 1254,
          height: 1254,
        },
        value: "25+",
        label: "Mentors",
      },
      {
        image: {
          src: "/images/growing-ideas/growing-ideas5.png",
          alt: "A glossy pillar icon representing the four pillar projects",
          width: 1254,
          height: 1254,
        },
        value: "4",
        label: "Pillar Projects",
      },
    ],
  },

  pillarProjects: {
    heading: "Our Pillar Projects",
    subtitle: "Four pathways. One shared purpose.",
    projects: [
      {
        image: {
          src: "/images/our-pillar/growing-1.png",
          alt: "A compass resting on an open book, symbolising guided learning",
          width: 1254,
          height: 1254,
        },
        accent: "primary",
        title: "Mission IAS",
        description:
          "Civil services mentorship, structured preparation and a deep sense of public service purpose.",
        ctaLabel: "Discover Project",
        href: "#",
      },
      {
        image: {
          src: "/images/our-pillar/growing-4.png",
          alt: "A young speaker addressing a seated group at a youth conclave",
          width: 1254,
          height: 1254,
        },
        accent: "green",
        title: "Youth Conclaves",
        description: "Dialogue, leadership and public speaking for confident, compassionate change-makers.",
        ctaLabel: "Discover Project",
        href: "#",
      },
      {
        image: {
          src: "/images/our-pillar/growing-3.png",
          alt: "A heritage archway with old books and scrolls, symbolising cultural memory",
          width: 1254,
          height: 1254,
        },
        accent: "gold",
        title: "Heritage Conclaves",
        description: "Exploring culture, history and living traditions that connect us to our roots and inspire the future.",
        ctaLabel: "Discover Project",
        href: "/heritage-conclaves",
      },
      {
        image: {
          src: "/images/our-pillar/growing-2.png",
          alt: "Several hands joined together holding a compass with a young plant",
          width: 1254,
          height: 1254,
        },
        accent: "purple",
        title: "Other Activities",
        description: "Community learning, campaigns and service projects creating real impact on the ground.",
        ctaLabel: "Discover Project",
        href: "#",
      },
    ],
  },

  buildingLeaders: {
    heading: "Building Informed Leaders For Tomorrow",
    description:
      "Knowledge Walk is a youth-led nation-building platform nurturing informed citizens and future leaders through civil services guidance, meaningful conversations on heritage and society, and hands-on community initiatives.",
    images: [
      { src: "/images/leader/leader-image1.png", alt: "A mentor and student reviewing notes together in a library", width: 1448, height: 1086 },
      { src: "/images/leader/leader-image2.png", alt: "Three students collaborating over a notebook and tablet", width: 1448, height: 1086 },
      { src: "/images/leader/leader-image3.png", alt: "Volunteers planting a sapling together at a community drive", width: 1122, height: 1402 },
    ],
    pillars: [
      {
        pathIcon: { src: "/images/leader/icon1.png", alt: "Knowledge" },
        icon: { src: "/images/leader/icon5.png", alt: "Learn deeply" },
        accent: "primary",
        label: "Knowledge",
        title: "Learn Deeply",
        description: "Question, Understand, Grow every day",
      },
      {
        pathIcon: { src: "/images/leader/icon2.png", alt: "Leadership" },
        icon: { src: "/images/leader/icon4.png", alt: "Lead responsibly" },
        accent: "green",
        label: "Leadership",
        title: "Lead Responsibly",
        description: "Empathize, Collaborate, Create positive change",
      },
      {
        pathIcon: { src: "/images/leader/icon3.png", alt: "Impact" },
        icon: { src: "/images/leader/icon6.png", alt: "Serve meaningfully" },
        accent: "purple",
        label: "Impact",
        title: "Serve Meaningfully",
        description: "Take action, Give back, Build a better tomorrow",
      },
    ],
    cta: { label: "Know About Us", href: "/about-us" },
  },

  missionIas: {
    eyebrow: "Our Flagship Program",
    heading: "Mission IAS 2026",
    description:
      "A complete roadmap with disciplined preparation, expert guidance and a public-service mindset. Covering Prelims, Mains, Interview and mentorship at every crucial step.",
    steps: [
      {
        step: 1,
        icon: { src: "/images/mission-ias/icon-foundation.svg", alt: "Foundation stage icon" },
        title: "Foundation",
        description: "Concepts, NCERTs and Current Affairs basics",
      },
      {
        step: 2,
        icon: { src: "/images/mission-ias/icon-prelims.svg", alt: "Prelims stage icon" },
        title: "Prelims",
        description: "Advanced topics, practice tests and strategy building",
      },
      {
        step: 3,
        icon: { src: "/images/mission-ias/icon-mains.svg", alt: "Mains stage icon" },
        title: "Mains",
        description: "Answer writing, ethics and deep domain insights",
      },
      {
        step: 4,
        icon: { src: "/images/mission-ias/icon-interview.svg", alt: "Interview stage icon" },
        title: "Interview",
        description: "Personality development and mock interviews",
      },
    ],
    primaryCta: { label: "Know About Us", href: "/about-us" },
    secondaryCta: { label: "Enquire Now", href: "/contact" },
    image: {
      src: "/images/mission-ias/mision-ias.png",
      alt: "Student preparing for civil services exams with an exam-preparation dashboard overlay",
      width: 1672,
      height: 941,
    },
    dashboardPreview: {
      title: "Exam Preparation Dashboard",
      progressLabel: "Overall Progress",
      progressPercent: 72,
      planItems: ["Policy Revision", "Essay Practice", "Current Affairs"],
      mentorNote: "Mentor Connect – Next Session Saturday 3:00 PM",
    },
  },

  heritageConclave: {
    heading: "Heritage Conclaves",
    description:
      "Spaces to celebrate India's civilizational wisdom, art, architecture and cultural memory with young scholars and practitioners.",
    cta: { label: "Explore The Conclave", href: "/heritage-conclaves" },
    image: {
      src: "/images/heritage/heritage.png",
      alt: "Young scholars in conversation at a heritage site",
      width: 1537,
      height: 1023,
    },
    highlights: [
      {
        icon: { src: "/images/heritage/icon-culture-identity.svg", alt: "Culture and Identity icon" },
        title: "Culture & Identity",
        description: "Understanding who we are through diverse symbols and shared heritage.",
      },
      {
        icon: { src: "/images/heritage/icon-living-traditions.svg", alt: "Living Traditions icon" },
        title: "Living Traditions",
        description: "Exploring classical arts and festivals and crafts that keep our roots alive.",
      },
      {
        icon: { src: "/images/heritage/icon-ideas-generations.svg", alt: "Ideas Across Generations icon" },
        title: "Ideas Across Generations",
        description: "Timeless ideas and values that continue to shape our modern world.",
      },
    ],
  },

  ideasInMotion: {
    heading: "Ideas In Motion",
    items: [
      {
        title: "Youth Dialogue",
        description: "Conversations that build perspectives.",
        image: { src: "/images/activities/youth-dialogue.png", alt: "Youth Dialogue session" },
        icon: { src: "/images/ideas-in-motion/icon-youth-dialogue.svg", alt: "Youth Dialogue icon" },
      },
      {
        title: "Leadership Workshop",
        description: "Building skills for ethical leadership and teamwork.",
        image: { src: "/images/activities/leadership-workshop.png", alt: "Leadership Workshop" },
        icon: { src: "/images/ideas-in-motion/icon-leadership-workshop.svg", alt: "Leadership Workshop icon" },
      },
      {
        title: "Community Service",
        description: "On-ground initiatives for real community impact.",
        image: { src: "/images/activities/community-service.png", alt: "Community Service activity" },
        icon: { src: "/images/ideas-in-motion/icon-community-service.svg", alt: "Community Service icon" },
      },
      {
        title: "Educational Tours",
        description: "Learning through exposure, travel and field experiences.",
        image: { src: "/images/activities/educational-tours.png", alt: "Educational Tour" },
        icon: { src: "/images/ideas-in-motion/icon-educational-tours.svg", alt: "Educational Tours icon" },
      },
      {
        title: "Public Speaking",
        description: "Speak up. Share ideas. Inspire with clarity and confidence.",
        image: { src: "/images/activities/public-speaking.png", alt: "Public Speaking session" },
        icon: { src: "/images/ideas-in-motion/icon-public-speaking.svg", alt: "Public Speaking icon" },
      },
      {
        title: "Cultural Learning",
        description: "Explore arts, music, literature and traditional wisdom.",
        image: { src: "/images/activities/cultural-learning.png", alt: "Cultural Learning session" },
        icon: { src: "/images/ideas-in-motion/icon-cultural-learning.svg", alt: "Cultural Learning icon" },
      },
    ],
  },

  finalCta: {
    eyebrow: "Be Part Of The Journey",
    heading: "Walk With Knowledge. Lead With Purpose.",
    description:
      "Join a growing community of learners, leaders and changemakers. Together, let's build a thoughtful, inclusive and empowered India.",
    primaryCta: { label: "Join Knowledge Walk", href: "/join" },
    secondaryCta: { label: "Contact Us", href: "/contact-us" },
    image: { src: "/images/journey/journey-banner.png", alt: "An open book and compass beside an upward path" },
  },
};
