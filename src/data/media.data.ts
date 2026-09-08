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
        title: "Youth Conclave 2024",
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
};
