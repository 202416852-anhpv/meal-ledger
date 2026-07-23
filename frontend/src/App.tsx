import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddMeal from "./pages/AddMeal";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import AddMealDetail from "./pages/AddMealDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-meal" element={<AddMeal />} />
        <Route path="/add-meal-detail" element={<AddMealDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
