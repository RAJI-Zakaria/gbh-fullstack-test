import { VehicleList } from "@/components";
import { VehiclesResponse } from "@/types";
import { Suspense } from "react";

const HomePage = async () => {
  const response = await fetch(
    "http://localhost:3000/api/vehicles?limit=4&sortBy=price"
  );

  const data: VehiclesResponse = await response.json();

  return (
    <div className="space-y-3">
      <h1 className="text-3xl uppercase text-center mb-10">
        Most Affordable Cars
      </h1>
      {/* VEHICLES LIST */}
      <VehicleList vehicles={data.vehicles} />
      {/* instead of using suspense we can use the loading.tsx file */}
      {/* <Suspense fallback={<p>Loading...</p>}>
        <VehicleList vehicles={data.vehicles} />
      </Suspense> */}
    </div>
  );
};

export default HomePage;
