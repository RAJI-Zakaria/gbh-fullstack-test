// Here we will add the route to get all vehicles using the filter
import { NextRequest, NextResponse } from "next/server";
import data from "@/dump/vehicles.json";
import { Vehicle } from "@/types";

const vehicles = data as Vehicle[];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // TODO : add validation for all the filter parameters using ZOD or JOI...
  // Getting Filter Parameters
  const manufacturer = searchParams.get("manufacturer");
  const type = searchParams.get("type");
  const year = searchParams.get("year");

  const filteredVehicles = vehicles.filter((vehicle: Vehicle) => {
    if (
      manufacturer &&
      vehicle.manufacturer.toLowerCase() !== manufacturer.toLowerCase()
    ) {
      return false;
    }
    if (type && vehicle.type.toLowerCase() !== type.toLowerCase()) {
      return false;
    }
    if (year && vehicle.year !== parseInt(year)) {
      return false;
    }
    return true;
  });

  // Get params for Sorting
  const sortBy = searchParams.get("sortBy");

  if (sortBy) {
    filteredVehicles.sort((a, b) => {
      if (sortBy.toLowerCase() === "price") {
        return Number(a.price) - Number(b.price);
      }
      if (sortBy.toLowerCase() === "year") {
        return Number(a.year) - Number(b.year);
      }
      return 0;
    });
  }

  // Get params for pagination
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "4");

  //calculate the start and end index
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  //Paginate results
  const paginatedVehicles = filteredVehicles.slice(startIndex, endIndex);

  if (paginatedVehicles.length === 0) {
    return NextResponse.json({ message: "No vehicles found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      vehicles: paginatedVehicles,
      totalPages: Math.ceil(filteredVehicles.length / limit),
    },
    { status: 200 }
  );
}
