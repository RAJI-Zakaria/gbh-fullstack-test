import { Vehicle } from "@/types";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import React from "react";

const VehicleDetails = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row justify-center border border-b-1">
        {vehicle.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={vehicle.model}
            className="object-cover"
          />
        ))}
      </div>

      <div className="border rounded-lg shadow-md p-4">
        <table className="w-full md:w-[400px] m-auto">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700">
                Manufacturer
              </td>
              <td className="px-4 py-2 text-gray-600">
                {vehicle.manufacturer}
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700">Type</td>
              <td className="px-4 py-2 text-gray-600">{vehicle.type}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700">Model</td>
              <td className="px-4 py-2 text-gray-600">{vehicle.model}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700">Year:</td>
              <td className="px-4 py-2 text-gray-600">{vehicle.year}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-gray-700">Price</td>
              <td className="px-4 py-2 text-gray-600">{vehicle.price}</td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700">
                Fuel Type
              </td>
              <td className="px-4 py-2 text-gray-600">{vehicle.fuelType}</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700">
                Transmission
              </td>
              <td className="px-4 py-2 text-gray-600">
                {vehicle.transmission}
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold text-gray-700">
                features
              </td>
              <td className="px-4 py-2 text-gray-600">
                {vehicle.features.join(", ")}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-gray-700">
                description
              </td>
              <td className="px-4 py-2 text-gray-600">{vehicle.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default VehicleDetails;
