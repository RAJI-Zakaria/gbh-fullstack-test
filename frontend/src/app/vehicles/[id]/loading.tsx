import { Skeleton } from "@nextui-org/skeleton";

const page = async () => {
  return (
    <div className="container mx-auto mt-8">
      <Skeleton className="h-[500px] w-full mb-10 " />
    </div>
  );
};

export default page;
