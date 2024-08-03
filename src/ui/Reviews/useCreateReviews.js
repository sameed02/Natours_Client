import { useMutation } from "@tanstack/react-query";
import { createReviews } from "../../services/apiReviews.js";
import { toast } from "react-toastify";

export function useCreateReviews() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["review"],

    mutationFn: ({ tourId, rating, review }) =>
      createReviews({ tourId, rating, review }),

    onSuccess: () => {
      toast.success("Review Created !");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { mutate, isPending };
}
