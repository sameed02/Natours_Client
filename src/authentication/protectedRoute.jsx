import { useNavigate } from "react-router-dom";

import useFetchUser from "./useFetchUser.js";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthProvider } from "../context/authContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { provideUser } = useAuthProvider();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: user, isPending, isError, fetchStatus } = useFetchUser();

  useEffect(() => {
    if (isError) {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.error("Unauthorized Access!");
    } else if (!isPending && user?.status === "success") {
      provideUser(user);
    }
  }, [isError, navigate, queryClient, isPending, provideUser, user]);

  if (isPending && fetchStatus !== "fetching") {
    console.log("fetching user");
  }

  if (user) return children;
};

export default ProtectedRoute;
