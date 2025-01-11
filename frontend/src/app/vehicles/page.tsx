// The current page will show the list of vehicles with filters and pagination
import { VehiclesList } from "@/components";
import { VehiclesResponse } from "@/types";
import { Suspense } from "react";

export default async function page() {
  // Construct the query string based on the filters
  const url = new URL("http://localhost:3000/api/vehicles?limit=4");

  // Fetch the vehicles data with the query parameters
  const response = await fetch(url.toString());

  const data: VehiclesResponse = await response.json();

  return (
    <>
      <Suspense fallback={<div>Loading vehicles...</div>}>
        <VehiclesList vehicles={data.vehicles} />
      </Suspense>
    </>
  );
}
