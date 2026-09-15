import { useMutation, useQueryClient } from "@tanstack/react-query";
import urlsApi from "@/api/urls";

const useDeleteUrl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: urlsApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["urls"],
      });
    },
  });
};

export default useDeleteUrl;
