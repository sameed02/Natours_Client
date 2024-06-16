import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { updateUser } from "../services/apiUser.js";
import { toast } from "react-toastify";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { reset, getValues } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ username, email, fileName, file }) =>
      await updateUser({ username, email, fileName, file }),

    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      reset(getValues());
    },

    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
