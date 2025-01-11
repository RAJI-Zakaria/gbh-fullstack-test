import { Vehicle, VehicleResponse } from "@/types";
import { GET } from "./route";
import { NextRequest } from "next/server";

it("GET: should return array of 2 vehicles alongside the status 200", async () => {
  const requestObj = {
    nextUrl: {
      searchParams: new URLSearchParams({ year: "2022" }),
    },
  } as NextRequest;

  const response = await GET(requestObj);
  const body: VehicleResponse = await response.json();

  expect(response.status).toBe(200);
  expect(body.vehicles.length).toBe(1);
  expect(body.vehicles[0].id).toBe("2");
  expect(body.vehicles[0].description).toBe(
    "High-performance electric sedan with advanced technology."
  );
});
