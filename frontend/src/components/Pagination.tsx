"use client";
import { Pagination } from "@nextui-org/pagination";
import { useSearchParams, useRouter } from "next/navigation";

const CustomPagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const handlePageChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("page", value);
    }
    router.push(`?${params.toString()}`);
  };

  if (!totalPages || totalPages === 1) return null;
  return (
    <div className="flex items-center justify-center mt-5">
      <Pagination
        color="warning"
        isCompact
        showControls
        initialPage={1}
        total={totalPages}
        page={page}
        onChange={(value) => handlePageChange(value.toString())}
      />
    </div>
  );
};

export default CustomPagination;
