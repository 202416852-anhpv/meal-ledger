import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import { RootLayout } from "../components/layout/RootLayout";
import AddMeal from "../pages/AddMeal";
import AddMealDetail from "../pages/AddMealDetail";
import Participant from "../pages/Participant";
import Restaurant from "../pages/Restaurant";

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
      {
        path: "add-meal-detail",
        element: <AddMealDetail />,
      },
      {
        path: "participants",
        element: <Participant />,
      },
      {
        path: "restaurants",
        element: <Restaurant />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
