import { useState } from "react";
import { SearchBar } from "../components/common/SearchBar";
import { TopBar } from "../components/layout/TopBar";

export default function AddMealDetail() {
  const [newRestaurant, setNewRestaurant] = useState("");

  return (
    <div>
      <TopBar title=" Quán ăn" />
      <div className="mt-8 px-4">
        <SearchBar
          value={newRestaurant}
          onChange={setNewRestaurant}
          placeholder="Tìm kiếm tên quán ăn"
        />
      </div>
    </div>
  );
}
