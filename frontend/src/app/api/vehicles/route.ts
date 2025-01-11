// Here we will add the route to get all vehicles using the filter
import { NextRequest, NextResponse } from "next/server";
import Vehicles from "@/dump/vehicles.json";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      Vehicles,
    },
    { status: 200 }
  );
}
