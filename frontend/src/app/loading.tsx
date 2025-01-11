import { LoadingVehiclesList } from "@/components";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="space-y-3 container mx-auto text-center py-4">
      <Skeleton className="h-5 w-[350px] mx-auto mb-10 " />
      {/* VEHICLES LIST */}
      <LoadingVehiclesList />
      {/* instead of using suspense we can use the loading.tsx file */}
      {/* <Suspense fallback={<p>Loading...</p>}>
    <VehiclesList vehicles={data.vehicles} />
  </Suspense> */}
    </div>
  );
};

export default loading;
