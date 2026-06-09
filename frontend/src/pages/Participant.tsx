import { useEffect, useState } from "react";
import { SearchBar } from "../components/common/SearchBar";
import { TopBar } from "../components/layout/TopBar";
import { AddInputParticipant } from "../components/common/AddInputParticipant";
import type { Participant } from "../types/participants";
import { participantService } from "../services/participantService";
import { InfoCard } from "../components/common/InfoCard";

export default function AddMealDetail() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newParticipant, setNewParticipant] = useState("");

  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const res = await participantService.getAll();
        if (res.success) {
          setParticipants(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchParticipants();
  }, []);

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

        <div>
          {participants.map((person) => (
            <div key={person._id} className="mt-4">
              <InfoCard
                title={person.name}
                subTitle={`${person.debt.toLocaleString("vi-VN")}đ`}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
