import { Pencil, Trash } from "lucide-react";
import type { MouseEvent } from "react";

interface InfoCardProps {
  title: string;
  subTitle: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const InfoCard = ({
  title,
  subTitle,
  onEdit,
  onDelete,
}: InfoCardProps) => {
  const handleEdit = (e: MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };
  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="flex justify-between bg-white border border-gray-400 rounded-2xl h-32 p-4">
      <div className="">
        <h2 className="mb-2">{title}</h2>
        <p className="text-red-600">{subTitle}</p>
      </div>
      <div className="flex flex-col justify-between">
        <button onClick={handleEdit} className="">
          <Pencil />
        </button>
        <button onClick={handleDelete} className="">
          <Trash />
        </button>
      </div>
    </div>
  );
};
