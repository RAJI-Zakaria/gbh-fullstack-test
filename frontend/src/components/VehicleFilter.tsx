"use client";
import { Card } from "@nextui-org/card";
import { Select, SelectItem } from "@nextui-org/select";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { manufacturers, sortOptions, types, years } from "@/dump/filterOptions";

const VehicleFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const manufacturer = searchParams.get("manufacturer") || "";
  const type = searchParams.get("type") || "";
  const year = searchParams.get("year") || "";
  const sortBy = searchParams.get("sortBy") || "";

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      // TODO : Validate the value before setting it --> Hint : use a switch statement
      params.set(key, value);
      // reset the page to 1 when a filter is changed
      params.set("page", "1");
    }
    router.push(`?${params.toString()}`);
  };
  return (
    <Card className="container flex flex-col md:flex-row gap-3 justify-between m-auto my-5 p-5">
      <div className="flex gap-3 flex-1">
        {/* Manufacturer */}
        <Select
          className="max-w-xs"
          items={manufacturers}
          defaultSelectedKeys={manufacturer ? [manufacturer] : []}
          label="Manufacturer"
          placeholder="Manufacturer"
          onChange={(e) => handleFilterChange("manufacturer", e?.target?.value)}
        >
          {(manufacturer) => (
            <SelectItem key={manufacturer.key}>{manufacturer.label}</SelectItem>
          )}
        </Select>

        {/* TYPE */}
        <Select
          className="max-w-xs"
          items={types}
          defaultSelectedKeys={type ? [type] : []}
          label="Type"
          placeholder="Type"
          onChange={(e) => handleFilterChange("type", e?.target?.value)}
        >
          {(type) => <SelectItem key={type.key}>{type.label}</SelectItem>}
        </Select>

        {/* YEAR */}
        <Select
          className="max-w-xs"
          items={years}
          defaultSelectedKeys={year ? [year] : []}
          label="Year"
          placeholder="Year"
          onChange={(e) => handleFilterChange("year", e?.target?.value)}
        >
          {(year) => <SelectItem key={year.key}>{year.label}</SelectItem>}
        </Select>
      </div>

      {/* SORT By Year Or Price */}
      <Select
        className="max-w-full md:max-w-xs"
        items={sortOptions}
        label="Sort By"
        placeholder="Sort By"
        defaultSelectedKeys={sortBy ? [sortBy] : []}
        onChange={(e) => handleFilterChange("sortBy", e?.target?.value)}
      >
        {(sortBy) => <SelectItem key={sortBy.key}>{sortBy.label}</SelectItem>}
      </Select>
    </Card>
  );
};

export default VehicleFilter;
