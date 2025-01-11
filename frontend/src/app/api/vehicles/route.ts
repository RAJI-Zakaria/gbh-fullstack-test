// Here we will add the route to get all vehicles using the filter
import { NextRequest, NextResponse } from "next/server";
import data from "@/dump/vehicles.json";
import { Vehicle } from "@/types";

const vehicles = data as Vehicle[];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Getting Filter Parameters
  const manufacturer = searchParams.get("manufacturer");
  const type = searchParams.get("type");
  const year = searchParams.get("year");

  const filteredVehicles = vehicles.filter((vehicle: Vehicle) => {
    if (manufacturer && vehicle.manufacturer !== manufacturer) {
      return false;
    }
    if (type && vehicle.type !== type) {
      return false;
    }
    if (year && vehicle.year !== parseInt(year)) {
      return false;
    }
    return true;
  });

  return NextResponse.json(
    {
      filteredVehicles,
    },
    { status: 200 }
  );
}
