import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useLogoutUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: logoutUser,

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { mutate, isPending };
}

export { useLogoutUser };
