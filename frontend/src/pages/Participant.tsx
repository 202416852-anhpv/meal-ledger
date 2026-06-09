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

  const fetchAllParticipants = async () => {
    try {
      const res = await participantService.getAll();
      if (res.success) {
        setParticipants(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const initFetch = async () => {
      await fetchAllParticipants();
    };
    initFetch();
  }, []);

  const handleAddParticipant = async () => {
    if (!newParticipant.trim()) return;
    try {
      const res = await participantService.create(newParticipant, 0);

      if (res.success) {
        setNewParticipant("");
        fetchAllParticipants();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteParticipant = async (id: string) => {
    try {
      const res = await participantService.delete(id);
      if (res.success) {
        fetchAllParticipants();
      }
    } catch (err) {
      console.error(err);
    }
  };

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
            onAdd={handleAddParticipant}
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
                onDelete={() => handleDeleteParticipant(person._id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
