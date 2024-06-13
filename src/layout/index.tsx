import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
