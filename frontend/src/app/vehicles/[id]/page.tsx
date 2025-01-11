import { VehicleDetails } from "@/components";
import { Vehicle } from "@/types";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: {
    id: string;
  };
}
const page = async ({ params }: Props) => {
  const { id } = await params;
  if (isNaN(Number(id))) notFound();

  const reponse = await fetch(`http://localhost:3000/api/vehicles/${id}`);
  const data = await reponse.json();
  const vehicle: Vehicle = data.vehicle;

  return (
    <div className="container mx-auto mt-8">
      <VehicleDetails vehicle={vehicle} />
    </div>
  );
};

export default page;
