import { LoadingVehiclesList, VehicleFilter } from "@/components";

export default async function loading() {
  return (
    <>
      <VehicleFilter />
      <LoadingVehiclesList />
    </>
  );
}
