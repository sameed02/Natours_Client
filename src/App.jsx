import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Tours from "./pages/Tours.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import Hero from "./ui/Hero.jsx";
import Settings from "./pages/Settings.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./authentication/Login.jsx";
import ProtectedRoute from "./authentication/protectedRoute.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import TourDetails from "./pages/TourDetails.jsx";
import Signup from "./authentication/Signup.jsx";
import PaymentVerification from "./ui/Bookings/paymentVerification.jsx";
import Bookings from "./ui/Bookings/bookings.jsx";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/tours",
        element: <Tours />,
      },

      {
        path: "/tours/:tourId",
        element: <TourDetails />,
      },

      {
        path: "/bookings",
        element: <Bookings />,
      },

      {
        path: "/payment-success",
        element: <PaymentVerification />,
      },

      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },

  {
    path: "/",
    element: <Hero />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
