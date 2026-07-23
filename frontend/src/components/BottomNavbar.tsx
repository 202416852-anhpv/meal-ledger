import { Home, Menu, PlusCircle, User, Utensils } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Trang chủ",
    path: "/",
    icon: Home,
  },
  {
    name: "Thêm bữa ăn",
    path: "/add-meal",
    icon: PlusCircle,
  },
  {
    name: "Thành viên",
    path: "/participants",
    icon: User,
  },
  {
    name: "Quán ăn",
    path: "/restaurants",
    icon: Utensils,
  },
  {
    name: "Khác",
    path: "/others",
    icon: Menu,
  },
];

export default function BottomNavBar() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 w-full border-t border-neutral-400 pt-2">
      <nav className="flex justify-around">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          let isActive;

          if (item.path === "/") {
            isActive = location.pathname === "/";
          } else {
            isActive = location.pathname.startsWith(item.path);
          }

          return (
            <NavLink
              className={`flex flex-col justify-center items-center ${isActive ? "text-orange-400" : ""}`}
              key={item.path}
              to={item.path}
            >
              <IconComponent className="text-center" />
              <div className="text-[14px]">{item.name}</div>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
