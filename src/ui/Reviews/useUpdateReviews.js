import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateReview } from "../../services/apiReviews.js";

export function useUpdateReview() {
  const queryClient = useQueryClient();

  const { mutate: mutateUpdateReview, isPending: isUpdatingReview } =
    useMutation({
      mutationFn: async ({ rating, review, reviewId }) =>
        await updateReview({ rating, review, reviewId }),

      onSuccess: () => {
        toast.success("Review updated successfully");
        queryClient.invalidateQueries();
      },

      onError: (err) => toast.error(err.message),
    });

  return { mutateUpdateReview, isUpdatingReview };
}
