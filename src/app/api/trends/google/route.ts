import { NextResponse } from "next/server";
import { getGoogleTrends } from "@/lib/googleTrends";

export async function GET() {
  try {
    console.log("🔥 API route hit: /api/trends/google");

    const trends = await getGoogleTrends();
    return NextResponse.json(trends);
  } catch (error) {
    console.error("🔥 API route failed:", error);
    return NextResponse.json({ error: "Failed to fetch trends" }, { status: 500 });
  }
}
