import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword } from "../services/apiUser.js";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { reset, getValues } = useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ password, newPassword, newPasswordConfirm }) =>
      await updatePassword({ password, newPassword, newPasswordConfirm }),

    onSuccess: () => {
      toast.success("User updated successfully");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      reset(getValues());
    },

    onError: (err) => toast.error(err.message),
  });

  return { mutate, isPending };
}
