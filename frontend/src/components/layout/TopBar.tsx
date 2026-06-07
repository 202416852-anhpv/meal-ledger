import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  title: string;
  showBackButton?: boolean;
}

export const TopBar = ({ title, showBackButton = true }: TopBarProps) => {
  const navigate = useNavigate();

  return (
    <header className="flex h-14 items-center border-b border-black bg-white">
      <div className="w-20 text-center">
        {showBackButton && (
          <button onClick={() => navigate(-1)}>
            <ArrowLeft />
          </button>
        )}
      </div>
      <h1 className="flex-1 text-center text-xl">{title}</h1>
      <div className="w-20"></div>
    </header>
  );
};
