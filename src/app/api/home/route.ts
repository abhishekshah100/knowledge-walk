import { NextResponse } from "next/server";
import { getHomePageData } from "@/services/home.service";
import type { ApiResponse, HomePageData } from "@/types/site-content.types";

/**
 * GET /api/home
 *
 * Single aggregated endpoint for the home page. It combines navigation,
 * home sections, events, stories and media into one response so the
 * frontend only has to make one request.
 */
export async function GET() {
  try {
    const data = await getHomePageData();
    const body: ApiResponse<HomePageData> = { success: true, data };
    return NextResponse.json(body);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to load home page data.";
    const body: ApiResponse<HomePageData> = { success: false, error: message };
    return NextResponse.json(body, { status: 500 });
  }
}
