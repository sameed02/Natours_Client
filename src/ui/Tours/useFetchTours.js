import { useQuery } from "@tanstack/react-query";
import { getTours } from "../../services/apiTours.js";
import { useSearchParams } from "react-router-dom";

function useFetchTours() {
  const [searchParams] = useSearchParams();

  const sort = searchParams.get("sortBy") || "price"; // price low to high

  const page = searchParams.get("page") || 1;

  const { data, isPending, error } = useQuery({
    queryKey: ["tours", sort, page],
    queryFn: async () => await getTours(sort, page),
  });
  return { data, isPending, error };
}

export default useFetchTours;
