/**
 * Single source of truth for Knowledge Walk's real-world contact details.
 * The phone number, email, office hours and address each appear in more
 * than one place across the site (Contact page cards, the map info panel,
 * the footer) — every one of those reads from here instead of repeating
 * the raw value, so a change (a new number, new hours) only has to happen
 * once.
 */

export const ORG_EMAIL = "support@knowledgewalk.org";
export const ORG_EMAIL_HREF = `mailto:${ORG_EMAIL}`;

/** E.164 format — the one place this number is hand-written. */
export const ORG_PHONE_E164 = "+918826314093";
export const ORG_PHONE_DISPLAY = `${ORG_PHONE_E164.slice(0, 3)} ${ORG_PHONE_E164.slice(3)}`;
export const ORG_PHONE_HREF = `tel:${ORG_PHONE_E164}`;
export const ORG_WHATSAPP_HREF = `https://wa.me/${ORG_PHONE_E164.slice(1)}`;

export const ORG_OFFICE_HOURS_LINES = ["Monday – Saturday", "9:00 AM – 6:00 PM"];
export const ORG_OFFICE_HOURS_INLINE = ORG_OFFICE_HOURS_LINES.join(", ");

/** Precise, geocode-friendly form of the real Gurugram office address — feeds the map embed and "Get Directions" link. */
export const ORG_ADDRESS_GEOCODE = "ILABS Centre, Plot No. 404-405, Udyog Vihar Phase 3, Sector 20, Gurugram, Haryana 122016, India";
/** Same address, split for on-page display (office info card). */
export const ORG_ADDRESS_LINES = ["ILABS Centre, 6th Floor", "Plot No. 404–405, Udyog Vihar, Phase III", "Gurugram, Haryana 122016, India"];
/** Short form for compact spaces, e.g. the footer. */
export const ORG_ADDRESS_SHORT = "Gurugram, Haryana, India";
