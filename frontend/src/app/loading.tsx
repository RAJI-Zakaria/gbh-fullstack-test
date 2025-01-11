import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="space-y-3 container mx-auto text-center py-4">
      <Skeleton className="h-5 w-[350px] mx-auto mb-10 " />
      {/* VEHICLES LIST */}
      <div className="container px-3 md:px-0 m-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Skeleton className="h-[240px] w-full rounded-lg" />
        <Skeleton className="h-[240px] w-full rounded-lg" />{" "}
        <Skeleton className="h-[240px] w-full rounded-lg" />{" "}
        <Skeleton className="h-[240px] w-full rounded-lg" />
      </div>
      {/* instead of using suspense we can use the loading.tsx file */}
      {/* <Suspense fallback={<p>Loading...</p>}>
    <VehiclesList vehicles={data.vehicles} />
  </Suspense> */}
    </div>
  );
};

export default loading;
