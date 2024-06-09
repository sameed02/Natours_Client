import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/apiAuth.js";

function useFetchUser() {
  const { data, isPending, isError, fetchStatus } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
    retry: false,
  });
  return { data, isPending, isError, fetchStatus };
}

export default useFetchUser;
