import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTour } from "../../services/apiTours.js";
import { toast } from "react-toastify";

export function useFetchTour() {
  const { tourId } = useParams(); // reading params from url
  const { data, isPending } = useQuery({
    queryKey: ["tour", tourId],
    queryFn: () => getTour(tourId),
    onSuccess: () => {
      toast.success("tour by id fetched");
    },
    retry: false,
  });
  return { data, isPending };
}
