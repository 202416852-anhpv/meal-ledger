import { Outlet, useLocation } from "react-router-dom";
import TopAppBar from "../components/TopAppBar";
import BottomNavBar from "../components/BottomNavbar";

export default function MainLayout() {
  const location = useLocation();
  const titles: Record<string, string> = {
    "/": "Trang chủ",
    "/add-meal": "Thêm bữa ăn",
    "/add-meal-detail": "Chi tiết bữa ăn",
    "/participants": "Thành viên",
    "/restaurants": "Quán ăn",
    "/others": "Khác",
  };

  return (
    <div>
      <TopAppBar title={titles[location.pathname]} />
      <main>
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
}
