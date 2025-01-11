import { Vehicle } from "@/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Link from "next/link";

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  const { manufacturer, model, year, images } = vehicle;

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">New Car</p>
        <h4 className="font-bold text-large">
          {manufacturer} {model}
        </h4>
        <small className="text-default-500">{year}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={`${manufacturer} ${model} car`}
          className="object-cover rounded-xl"
          src={images[0]}
        />
      </CardBody>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <Link href={`/vehicles/${vehicle.id}`}>
            <Button color="warning">Show Details</Button>
          </Link>

          <div className="text-xl">${vehicle.price}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
