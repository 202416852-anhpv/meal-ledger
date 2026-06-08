import { useState } from "react";
import { SearchBar } from "../components/common/SearchBar";
import { TopBar } from "../components/layout/TopBar";
import { AddInputParticipant } from "../components/common/AddInputParticipant";
import { InfoCard } from "../components/common/InfoCard";

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
        <div className="flex justify-between mt-4">
          <h2>Tất cả thành viên</h2>
          <p>Sắp xếp</p>
        </div>
        <div className="mt-8">
          <InfoCard
            title="Pham Viet Anh"
            subTitle="100.000đ"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
        <div className="mt-8">
          <InfoCard
            title="Nguyen Dang Khanh"
            subTitle="500.000đ"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
        <div className="mt-8">
          <InfoCard
            title="Le Dinh Vinh"
            subTitle="50.000đ"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
        <div className="mt-8">
          <InfoCard
            title="Nguyen Tran Nhat Minh"
            subTitle="1.000.000đ"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
        <div className="mt-8">
          <InfoCard
            title="Nguyen Kim Huy"
            subTitle="200.000đ"
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </div>
        <div className="h-20"></div>
      </div>
    </div>
  );
}
