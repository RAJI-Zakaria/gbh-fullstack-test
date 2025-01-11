import { Hero, VehiclesList } from "@/components";
import { VehiclesResponse } from "@/types";

const HomePage = async () => {
  const response = await fetch(
    "http://localhost:3000/api/vehicles?limit=4&sortBy=price"
  );

  const data: VehiclesResponse = await response.json();

  // await 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div className="space-y-3">
      <Hero />
      <h1 className="text-3xl uppercase text-center mb-10">
        Most Affordable Cars
      </h1>
      {/* VEHICLES LIST */}
      <VehiclesList vehicles={data.vehicles} />
    </div>
  );
};

export default HomePage;
