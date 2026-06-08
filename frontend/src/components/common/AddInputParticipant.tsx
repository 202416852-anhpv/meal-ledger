import { Plus } from "lucide-react";
import type { ChangeEvent, SyntheticEvent } from "react";

interface AddInputParticipantProps {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
  placeholder?: string;
}

export const AddInputParticipant = ({
  value,
  onChange,
  onAdd,
  placeholder,
}: AddInputParticipantProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-400 h-12 rounded-2xl  p-4"
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 focus:outline-none"
      />
      <button type="submit">
        <Plus />
      </button>
    </form>
  );
};
