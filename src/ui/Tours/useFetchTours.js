import { useQuery } from "@tanstack/react-query";
import { getTours } from "../../services/apiTours.js";

function useFetchTours(sort) {
  const { data, isPending, error } = useQuery({
    queryKey: ["tours", sort],
    queryFn: () => getTours(sort),
  });
  return { data, isPending, error };
}

export default useFetchTours;
