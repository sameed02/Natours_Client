import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginUser } from "../services/apiAuth.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useAuthenticateLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ email, password }) =>
      await LoginUser({ email, password }),

    onSuccess: () => {
      toast.success("User logged in !");
      navigate("/tours", { replace: true });
    },

    onError: (err) => {
      toast.error(err.message);
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { mutate, isPending };
}

export default useAuthenticateLogin;
