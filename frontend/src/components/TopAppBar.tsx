import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopAppBarProps {
  title: string;
}

export default function TopAppBar({ title }: TopAppBarProps) {
  const navigate = useNavigate();

  return (
    <div className="flex border-b border-neutral-400 px-2 py-2 text-orange-400">
      <ArrowLeft
        className="w-8 h-auto"
        onClick={() => {
          navigate("/");
        }}
      />
      <h1 className="flex-1 text-center text-2xl font-semibold">{title}</h1>
      <div className="w-8"></div>
    </div>
  );
}
