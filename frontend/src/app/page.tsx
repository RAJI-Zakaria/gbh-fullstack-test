import { Hero, VehiclesList } from "@/components";
import { VehiclesResponse } from "@/types";

const HomePage = async () => {
  const BASE_URL = process.env.API_URL || "http://localhost:3000";
  let data: VehiclesResponse = { vehicles: [], totalPages: 0 };

  try {
    const response = await fetch(
      `${BASE_URL}/api/vehicles?limit=4&sortBy=price`,
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
    data = await response.json();
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    // Fallback: Provide default empty data or mock data
    data = { vehicles: [], totalPages: 0 };
  }

  return (
    <div className="space-y-3">
      {BASE_URL}
      <Hero />
      <h1 className="text-3xl uppercase text-center mb-10">
        Most Affordable Cars
      </h1>
      {/* Display Loading Message or Placeholder if no vehicles */}
      {data.vehicles.length > 0 ? (
        <VehiclesList vehicles={data.vehicles} />
      ) : (
        <p className="text-center text-red-500">No vehicles found.</p>
      )}
    </div>
  );
};

export default HomePage;
