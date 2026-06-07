import { useState } from "react";
import { SearchBar } from "../components/common/SearchBar";
import { TopBar } from "../components/layout/TopBar";

export default function AddMealDetail() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <TopBar title="Thành viên" />
      <div className="px-4">
        <div className="mt-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Tìm kiếm tên người tham gia"
          />
        </div>
      </div>
    </div>
  );
}
