import { useQuery } from "@tanstack/react-query";
import { getTours } from "../../services/apiTours.js";

function useFetchTours() {
  const { data, isPending, error } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });
  return { data, isPending, error };
}

export default useFetchTours;
