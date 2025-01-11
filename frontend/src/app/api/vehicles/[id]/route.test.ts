import { Vehicle } from "@/types";
import { NextRequest } from "next/server";
import { GET } from "./route";

it("GET /vehicles/[id] : should return one vehicle alongside the status 200", async () => {
  const requestObj = {} as NextRequest;

  const response = await GET(requestObj, { params: { id: "2" } });
  const body: { vehicle: Vehicle } = await response.json();

  expect(response.status).toBe(200);
  expect(body.vehicle.id).toBe("2");
  expect(body.vehicle.description).toBe(
    "High-performance electric sedan with advanced technology."
  );
});
