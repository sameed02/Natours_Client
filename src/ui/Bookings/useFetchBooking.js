import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBooking.js";

export function useFetchBooking() {
  const { data, isPending } = useQuery({
    queryKey: ["tour"],
    queryFn: () => getBooking(),
    retry: false,
  });
  return { data, isPending };
}
