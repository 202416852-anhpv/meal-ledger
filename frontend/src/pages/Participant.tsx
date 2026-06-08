import { useState } from "react";
import { SearchBar } from "../components/common/SearchBar";
import { TopBar } from "../components/layout/TopBar";
import { AddInputParticipant } from "../components/common/AddInputParticipant";

export default function AddMealDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newParticipant, setNewParticipant] = useState("");

  return (
    <div>
      <TopBar title="Thành viên" />
      <div className="px-4">
        <div className="mt-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Tìm kiếm tên thành viên"
          />
        </div>
        <div className="mt-4">
          <AddInputParticipant
            value={newParticipant}
            onChange={setNewParticipant}
            onAdd={() => {}}
            placeholder="Thêm thành viên"
          />
        </div>
      </div>
    </div>
  );
}
