import {
  ORG_ADDRESS_GEOCODE,
  ORG_ADDRESS_LINES,
  ORG_EMAIL,
  ORG_EMAIL_HREF,
  ORG_OFFICE_HOURS_LINES,
  ORG_PHONE_DISPLAY,
  ORG_PHONE_HREF,
  ORG_WHATSAPP_HREF,
} from "@/constants/organization";
import type { ContactHeroContent, FaqContent, HowCanWeHelpContent, OfficeLocationContent } from "@/types/site-content.types";

const ICONS_DIR = "/images/contact/icons";

/** Content for the Contact Us page's first section — "Connect With Us" + the enquiry form. */
export const contactHeroData: ContactHeroContent = {
  heading: "Connect With Us",
  description:
    "We're always happy to hear from students, educators, partners and well-wishers. Reach out to us through any of the channels below or send us a message.",
  methods: [
    {
      icon: { src: `${ICONS_DIR}/email.webp`, alt: "Email icon", width: 128, height: 128 },
      accent: "primary",
      title: "Email Us",
      description: "Reach out anytime at",
      value: ORG_EMAIL,
      href: ORG_EMAIL_HREF,
    },
    {
      icon: { src: `${ICONS_DIR}/phone.webp`, alt: "Phone icon", width: 128, height: 128 },
      accent: "purple",
      title: "Call Us",
      description: "Speak with our team",
      value: ORG_PHONE_DISPLAY,
      href: ORG_PHONE_HREF,
    },
  ],
  whatsapp: {
    icon: { src: `${ICONS_DIR}/whatsapp.webp`, alt: "WhatsApp icon", width: 128, height: 128 },
    accent: "green",
    title: "WhatsApp",
    description: "Chat with our team for quick support",
    actionLabel: "Chat on WhatsApp",
    actionHref: ORG_WHATSAPP_HREF,
  },
  officeHours: {
    icon: { src: `${ICONS_DIR}/clock.webp`, alt: "Office hours icon", width: 128, height: 128 },
    title: "Office Hours",
    lines: ORG_OFFICE_HOURS_LINES,
  },
  form: {
    heading: "Send Us a Message",
    subtitle: "Tell us how we can help and we'll get back to you shortly.",
    responseNote: "We usually respond within one business day.",
  },
};

/** Content for the Contact Us page's second section — "Find Us on the Map". */
export const officeLocationData: OfficeLocationContent = {
  heading: "Find Us on the Map",
  mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(ORG_ADDRESS_GEOCODE)}&output=embed`,
  mapTitle: "Map showing the Knowledge Walk office location in Gurugram",
  directionsLabel: "Get Directions",
  directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ORG_ADDRESS_GEOCODE)}`,
  markerIcon: { src: `${ICONS_DIR}/location-pin.webp`, alt: "Location pin icon", width: 128, height: 128 },
  officeBrand: "Knowledge Walk",
  officeName: "Our Office",
  addressLines: ORG_ADDRESS_LINES,
  details: [
    {
      icon: { src: `${ICONS_DIR}/navigation.webp`, alt: "Nearby landmark icon", width: 128, height: 128 },
      title: "Nearby Landmark",
      lines: ["Close to Phase 3 Metro Station"],
    },
    {
      icon: { src: `${ICONS_DIR}/metro-bus.webp`, alt: "Metro and bus icon", width: 128, height: 128 },
      title: "By Metro / Bus",
      lines: ["Phase 3 Metro Station (Yellow Line)", "Well connected by NH-48 bus routes"],
    },
    {
      icon: { src: `${ICONS_DIR}/clock.webp`, alt: "Office hours icon", width: 128, height: 128 },
      title: "Office Hours",
      lines: ORG_OFFICE_HOURS_LINES,
    },
  ],
};

/** Content for the Contact Us page's third section — "How Can We Help?" quick topics. */
export const howCanWeHelpData: HowCanWeHelpContent = {
  heading: "How Can We Help?",
  subtitle: "Here are some common ways people reach out to us.",
  topics: [
    {
      icon: { src: `${ICONS_DIR}/program-enquiries.webp`, alt: "Program enquiries icon", width: 128, height: 128 },
      title: "Program Enquiries",
      description: "Questions about Mission IAS, Youth Conclaves, Heritage Conclaves or our other initiatives.",
      programOption: "Program Enquiries",
    },
    {
      icon: { src: `${ICONS_DIR}/partnerships.webp`, alt: "Partnerships and collaborations icon", width: 128, height: 128 },
      title: "Partnerships & Collaborations",
      description: "Explore opportunities to work together for greater impact.",
      programOption: "Partnerships & Collaborations",
    },
    {
      icon: { src: `${ICONS_DIR}/media-questions.webp`, alt: "Media and general questions icon", width: 128, height: 128 },
      title: "Media & General Questions",
      description: "For press, media inquiries or any other questions about Knowledge Walk.",
      programOption: "General Enquiry",
    },
  ],
};

/** Content for the Contact Us page's fourth section — "Frequently Asked Questions". */
export const faqData: FaqContent = {
  heading: "Frequently Asked Questions",
  subtitle: "Quick answers to some common questions.",
  items: [
    {
      question: "How quickly will I receive a response?",
      answer: "We usually respond within one business day. For anything urgent, message us on WhatsApp for a faster reply.",
    },
    {
      question: "Can I visit without an appointment?",
      answer: "We recommend scheduling a visit in advance so our team is available to welcome you and answer your questions properly.",
    },
    {
      question: "How can I volunteer?",
      answer: "Send us a message through the Program Enquiries channel with your area of interest, and our team will get in touch with the next steps.",
    },
    {
      question: "How can I register for a program?",
      answer: "Select the program you're interested in from the enquiry form on this page, share a few details, and our team will guide you through registration.",
    },
    {
      question: "Is there a registration fee?",
      answer: "Most of our community programs are free to join. A few specialised initiatives may involve a nominal fee, which we always share upfront before you enrol.",
    },
    {
      question: "How will my personal information be used?",
      answer: "We only use the details you share to respond to your enquiry and keep you updated on relevant programs — we never sell your information. See our Privacy Policy for full details.",
    },
  ],
};
