import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTour } from "../../services/apiTours.js";

export function useFetchTour() {
  const { tourId } = useParams(); // reading params from url
  const { data, isPending } = useQuery({
    queryKey: ["booking", tourId],
    queryFn: () => getTour(tourId),
    retry: false,
  });
  return { data, isPending };
}
