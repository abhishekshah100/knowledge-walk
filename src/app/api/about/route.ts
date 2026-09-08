import { NextResponse } from "next/server";
import { getAboutPageData } from "@/services/about.service";
import type { AboutPageData, ApiResponse } from "@/types/site-content.types";

/**
 * GET /api/about
 *
 * Aggregated endpoint for the About Us page's own content (site-wide
 * navigation still comes from `/api/home`, shared with every page).
 */
export async function GET() {
  try {
    const data = await getAboutPageData();
    const body: ApiResponse<AboutPageData> = { success: true, data };
    return NextResponse.json(body);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load about page data.";
    const body: ApiResponse<AboutPageData> = { success: false, error: message };
    return NextResponse.json(body, { status: 500 });
  }
}
