import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { RootLayout } from "../components/layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
