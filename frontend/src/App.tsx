import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddMeal from "./pages/AddMeal";
import AddMealDetail from "./pages/AddMealDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-meal" element={<AddMeal />} />
      <Route path="/add-meal-detail" element={<AddMealDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
