import { Outlet } from "react-router";
import { BottomNav } from "./BottomNav";

export const RootLayout = () => {
  return (
    <div>
      <Outlet />
      <BottomNav />
    </div>
  );
};
