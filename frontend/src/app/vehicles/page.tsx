// The current page will show the list of vehicles with filters and pagination
import { Pagination, VehicleFilter, VehiclesList } from "@/components";
import { VehicleQuery, VehiclesResponse } from "@/types";

// Props type is for the query params
interface Props {
  searchParams: Promise<VehicleQuery>;
}

export default async function page({ searchParams }: Props) {
  const {
    manufacturer = "all",
    type = "all",
    year = "all",
    page = "1",
    sortBy = "price",
  } = await searchParams;

  // Construct the query string based on the filters
  const BASE_URL = process.env.API_URL || "http://localhost:3000";

  const url = new URL(`${BASE_URL}/api/vehicles?limit=4`);

  // Add search parameters to the URL if they are provided
  if (manufacturer && manufacturer.toLowerCase() != "all")
    url.searchParams.set("manufacturer", manufacturer);
  if (type && type.toLowerCase() != "all") url.searchParams.set("type", type);
  if (year && year.toLowerCase() != "all") url.searchParams.set("year", year);
  if (page && page.toLowerCase()) url.searchParams.set("page", page);
  if (sortBy && sortBy.toLowerCase()) url.searchParams.set("sortBy", sortBy);

  // Fetch the vehicles data with the query parameters
  const response = await fetch(url.toString(), { cache: "no-store" });
  if (!response.ok) {
    console.error("Failed to fetch vehicles data:", response.statusText);
    return (
      <div>
        <p>Error fetching vehicles data. Please try again later.</p>
      </div>
    );
  }

  const data: VehiclesResponse = await response.json();

  return (
    <>
      <VehicleFilter />
      <VehiclesList vehicles={data.vehicles} />
      <Pagination totalPages={data.totalPages} />
    </>
  );
}
