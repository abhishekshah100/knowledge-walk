import { NextResponse } from "next/server";
import { getContactPageData } from "@/services/contact.service";
import type { ApiResponse, ContactPageData } from "@/types/site-content.types";

/**
 * GET /api/contact
 *
 * Aggregated endpoint for the Contact Us page's own content (site-wide
 * navigation still comes from `/api/home`, shared with every page).
 */
export async function GET() {
  try {
    const data = await getContactPageData();
    const body: ApiResponse<ContactPageData> = { success: true, data };
    return NextResponse.json(body);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load contact page data.";
    const body: ApiResponse<ContactPageData> = { success: false, error: message };
    return NextResponse.json(body, { status: 500 });
  }
}
