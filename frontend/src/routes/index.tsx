import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { RootLayout } from "../components/layout/RootLayout";
import AddMeal from "../pages/AddMeal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add-meal",
        element: <AddMeal />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
