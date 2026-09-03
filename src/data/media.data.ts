import type { MediaContent } from "@/types/site-content.types";

/** Content for the "Knowledge Walk In Action" gallery and partner logos. */
export const mediaData: MediaContent = {
  gallery: {
    heading: "Knowledge Walk In Action",
    subtitle: "Conversations that create change.",
    items: [
      // {
      //   id: "youth-conclave-2024-highlights",
      //   type: "video",
      //   title: "Youth Conclave 2024 Highlights",
      //   duration: "03:24",
      //   thumbnail: { src: "/images/walk-in-action/community-clean-drive.webp", alt: "Youth Conclave 2024 Highlights" },
      // },
      {
        id: "youth-conclave-2024-highlights",
        type: "image",
        title: "Youth Conclave 2024 Highlights",
        thumbnail: { src: "/images/walk-in-action/community-clean-drive.webp", alt: "Youth Conclave 2024 Highlights" },
      },
      {
        id: "heritage-walk-hampi",
        type: "image",
        title: "Heritage Walk – Hampi",
        thumbnail: { src: "/images/walk-in-action/heritage-walk-hampi.webp", alt: "Heritage Walk at Hampi" },
      },
      {
        id: "community-clean-drive",
        type: "image",
        title: "Community Clean Drive",
        thumbnail: { src: "/images/walk-in-action/community-clean-drive.webp", alt: "Community Clean Drive" },
      },
      {
        id: "mission-ias-mentorship-session",
        type: "image",
        title: "Mission IAS Mentorship Session",
        thumbnail: { src: "/images/walk-in-action/mission-ias-mentorship.webp", alt: "Mission IAS Mentorship Session" },
      },
    ],
  },
  partners: {
    heading: "Together We Go Further",
    description:
      "We partner with educational institutions, organizations and community leaders to build an ecosystem that empowers young India.",
    logos: [
      { name: "Pragati Foundation", logo: { src: "/images/partners/pragati-foundation.svg", alt: "Pragati Foundation" } },
      { name: "Naya Disha", logo: { src: "/images/partners/naya-disha.svg", alt: "Naya Disha" } },
      { name: "Samvaad Collective", logo: { src: "/images/partners/samvaad-collective.svg", alt: "Samvaad Collective" } },
      { name: "VidyaSetu Fellowship", logo: { src: "/images/partners/vidyasetu-fellowship.svg", alt: "VidyaSetu Fellowship" } },
      { name: "Uddhar Fellowship", logo: { src: "/images/partners/uddhar-fellowship.svg", alt: "Uddhar Fellowship" } },
      { name: "Samanvay Institute", logo: { src: "/images/partners/samanvay-institute.svg", alt: "Samanvay Institute" } },
      { name: "Yuva Shakti Network", logo: { src: "/images/partners/yuva-shakti-network.svg", alt: "Yuva Shakti Network" } },
      { name: "Bharat Heritage Forum", logo: { src: "/images/partners/bharat-heritage-forum.svg", alt: "Bharat Heritage Forum" } },
    ],
  },
};
