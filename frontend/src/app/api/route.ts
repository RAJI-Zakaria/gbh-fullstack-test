import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      Welcome: "home",
    },
    { status: 200 }
  );
}
