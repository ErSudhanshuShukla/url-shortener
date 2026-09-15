import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import urlsApi from "@/api/urls";

const useShortenUrl = () => {
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      url: "",
      alias: "",
    },
  });

  const mutation = useMutation({
    mutationFn: urlsApi.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["urls"],
      });

      form.reset();
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    onSubmit,
    mutation,
  };
};

export default useShortenUrl;