import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  // Temporarily disabled due to 404 errors from Google Trends source
  return NextResponse.json(
    { error: "Google Trends temporarily disabled due to 404 errors." },
    { status: 503 }
  );
}
