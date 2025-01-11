import { NextRequest, NextResponse } from "next/server";
import data from "@/dump/vehicles.json";
import { Vehicle } from "@/types";

const vehicles = data as Vehicle[];

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Get filter parameters
  const { id } = await params;

  //   TODO : ID must be validated

  const vehicle = vehicles.find((vehicle) => vehicle.id === id);

  if (!vehicle) {
    return NextResponse.json({ message: "No vehicle found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      vehicle,
    },
    { status: 200 }
  );
}
