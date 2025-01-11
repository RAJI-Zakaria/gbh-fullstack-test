// The current page will show the list of vehicles with filters and pagination
import { Pagination, VehicleFilter, VehiclesList } from "@/components";
import { VehiclesResponse, VehicleQuery } from "@/types";
import { Suspense } from "react";

// Props type is for the query params
interface Props {
  searchParams: VehicleQuery;
}

export default async function page({ searchParams }: Props) {
  const { manufacturer, type, year, page, sortBy } = await searchParams;

  // Construct the query string based on the filters
  const url = new URL("http://localhost:3000/api/vehicles?limit=4");

  // Add search parameters to the URL if they are provided
  if (manufacturer && manufacturer.toLowerCase() != "all")
    url.searchParams.set("manufacturer", manufacturer);
  if (type && type.toLowerCase() != "all") url.searchParams.set("type", type);
  if (year && year.toLowerCase() != "all") url.searchParams.set("year", year);
  if (page && page.toLowerCase()) url.searchParams.set("page", page);
  if (sortBy && sortBy.toLowerCase()) url.searchParams.set("sortBy", sortBy);

  // Fetch the vehicles data with the query parameters
  const response = await fetch(url.toString());

  const data: VehiclesResponse = await response.json();

  return (
    <>
      <VehicleFilter />
      <Suspense fallback={<div>Loading vehicles...</div>}>
        <VehiclesList vehicles={data.vehicles} />
      </Suspense>
      <Pagination totalPages={data.totalPages} />
    </>
  );
}
