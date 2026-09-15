import { useQuery } from "@tanstack/react-query";
import urlsApi from "@/api/urls";

const useUrls = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["urls"],
    queryFn: urlsApi.getAll,
  });

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};

export default useUrls;