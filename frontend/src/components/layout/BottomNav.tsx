import {
  Home,
  MoreHorizontal,
  PlusCircle,
  Users,
  Utensils,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: "Trang chủ",
      path: "/",
    },
    {
      icon: PlusCircle,
      label: "Thêm bữa ăn",
      path: "/add-meal",
    },
    {
      icon: Users,
      label: "Thành viên",
      path: "/participants",
    },
    {
      icon: Utensils,
      label: "Quán ăn",
      path: "/restaurants",
    },
    {
      icon: MoreHorizontal,
      label: "Khác",
      path: "/more",
    },
  ];

  return (
    <nav className="left-0 right-0 h-14 grid grid-cols-5 border-t border-gray-400 bg-white sticky bottom-0">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          item.path === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(item.path);

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center justify-center"
          >
            <Icon
              className={`h-6 w-6 ${isActive ? "text-orange-400" : "text-gray-400"}`}
            />
            <span
              className={`text-[12px] ${isActive ? "text-orange-400" : "text-gray-400"}`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
