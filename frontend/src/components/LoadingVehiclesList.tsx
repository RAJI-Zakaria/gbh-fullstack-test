import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

const LoadingVehiclesList = () => {
  return (
    <div className="container px-3 md:px-0 m-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Skeleton className="h-[240px] w-full rounded-lg" />
      <Skeleton className="h-[240px] w-full rounded-lg" />{" "}
      <Skeleton className="h-[240px] w-full rounded-lg" />{" "}
      <Skeleton className="h-[240px] w-full rounded-lg" />
    </div>
  );
};

export default LoadingVehiclesList;
