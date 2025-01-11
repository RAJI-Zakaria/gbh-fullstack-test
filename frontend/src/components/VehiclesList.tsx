import { Vehicle } from "@/types"; // Assuming you have a Vehicle type definition
import VehicleCard from "./VehicleCard";

const VehiclesList = ({ vehicles }: { vehicles: Vehicle[] }) => {
  return (
    <div className="container px-3 md:px-0 m-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {(!vehicles || vehicles?.length < 1) && <p>No vehicles found</p>}
      {vehicles?.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};

export default VehiclesList;
