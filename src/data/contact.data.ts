import type { ContactHeroContent, FaqContent, HowCanWeHelpContent, OfficeLocationContent } from "@/types/site-content.types";

const ICONS_DIR = "/images/contact/contact-page-assets/icons";

/**
 * Real office address (Kellton's Gurugram office), used to geocode the
 * embedded map and the "Get Directions" link — no Maps API key required
 * for either the `output=embed` map view or the `dir` deep link.
 */
const OFFICE_ADDRESS = "ILABS Centre, Plot No. 404-405, Udyog Vihar Phase 3, Sector 20, Gurugram, Haryana 122016, India";

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
      value: "support@knowledgewalk.org",
      href: "mailto:support@knowledgewalk.org",
    },
    {
      icon: { src: `${ICONS_DIR}/phone.webp`, alt: "Phone icon", width: 128, height: 128 },
      accent: "purple",
      title: "Call Us",
      description: "Speak with our team",
      value: "+91 8826314093",
      href: "tel:+918826314093",
    },
  ],
  whatsapp: {
    icon: { src: `${ICONS_DIR}/whatsapp.webp`, alt: "WhatsApp icon", width: 128, height: 128 },
    accent: "green",
    title: "WhatsApp",
    description: "Chat with our team for quick support",
    actionLabel: "Chat on WhatsApp",
    actionHref: "https://wa.me/918826314093",
  },
  officeHours: {
    icon: { src: `${ICONS_DIR}/clock.webp`, alt: "Office hours icon", width: 128, height: 128 },
    title: "Office Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
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
  mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`,
  mapTitle: "Map showing the Knowledge Walk office location in Gurugram",
  directionsLabel: "Get Directions",
  directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ADDRESS)}`,
  markerIcon: { src: `${ICONS_DIR}/location-pin.webp`, alt: "Location pin icon", width: 128, height: 128 },
  officeBrand: "Knowledge Walk",
  officeName: "Our Office",
  addressLines: ["ILABS Centre, 6th Floor", "Plot No. 404–405, Udyog Vihar, Phase III", "Gurugram, Haryana 122016, India"],
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
      lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
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
    },
    {
      icon: { src: `${ICONS_DIR}/partnerships.webp`, alt: "Partnerships and collaborations icon", width: 128, height: 128 },
      title: "Partnerships & Collaborations",
      description: "Explore opportunities to work together for greater impact.",
    },
    {
      icon: { src: `${ICONS_DIR}/media-questions.webp`, alt: "Media and general questions icon", width: 128, height: 128 },
      title: "Media & General Questions",
      description: "For press, media inquiries or any other questions about Knowledge Walk.",
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
      question: "Can I visit the office without an appointment?",
      answer: "We recommend scheduling a visit in advance so our team is available to welcome you and answer your questions properly.",
    },
    {
      question: "How can I volunteer with Knowledge Walk?",
      answer: "Send us a message through the Program Enquiries channel with your area of interest, and our team will get in touch with the next steps.",
    },
  ],
};
