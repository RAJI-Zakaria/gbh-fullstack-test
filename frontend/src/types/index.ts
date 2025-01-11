export interface Vehicle {
  id: string;
  manufacturer: string; // e.g., "BMW", "Tesla", "Toyota"
  model: string; // e.g., "X5", "Model 3", "Camry"
  year: number;
  type: VehicleType;
  price: number;
  fuelType: FuelType;
  transmission: string;
  mileage?: number;
  features: string[];
  images: string[];
  description: string;
  // most of the time we store dates as strings or as numbers(seconds)
  createdAt: string;
  updatedAt: string;
}

export enum VehicleType {
  SUV = "SUV",
  SEDAN = "SEDAN",
  TRUCK = "TRUCK",
  SPORTS = "SPORTS",
  LUXURY = "LUXURY",
  ELECTRIC = "ELECTRIC",
}

export enum FuelType {
  GASOLINE = "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
  HYBRID = "HYBRID",
  PLUGIN_HYBRID = "PLUGIN_HYBRID",
}

export interface VehicleResponse {
  vehicles: Vehicle[];
  totalPages: number;
}
