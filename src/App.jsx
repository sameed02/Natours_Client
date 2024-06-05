import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Tours from "./pages/Tours.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import Hero from "./ui/Hero.jsx";
import Settings from "./pages/Settings.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./authorization/Login.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },

      {
        path: "/tours",
        element: <Tours />,
      },

      {
        path: "/settings",
        element: <Settings />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
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
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
