import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SignupUser } from "../services/apiAuth.js";
import { toast } from "react-toastify";

function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ name, email, password, passwordConfirm }) =>
      SignupUser({ name, email, password, passwordConfirm }),

    onSuccess: () => {
      toast.success("User signed in !");
      navigate("/tours", { replace: true });
    },

    onError: (err) => {
      toast.error(err.message);
      queryClient.removeQueries();
      navigate("/signup", { replace: true });
    },
  });
  return { mutate, isPending };
}

export default useSignup;
