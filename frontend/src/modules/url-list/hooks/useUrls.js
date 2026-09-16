import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import urlsApi from "@/api/urls";

const useUrls = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["urls", page],
    queryFn: () => urlsApi.getAll(page),
  });

  const totalPages = data?.pagination?.totalPages ?? 1;
  const totalUrls = data?.pagination?.totalUrls ?? 0;

  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return {
    data: data?.data ?? [],
    page,
    totalPages,
    totalUrls,
    handlePrevious,
    handleNext,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};

export default useUrls;