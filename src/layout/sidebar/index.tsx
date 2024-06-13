import {
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Grid2x2Check,
  Home,
  Notebook,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "../../components/ui/button";
import LogoOnlyIcon from "../../components/logo";
import NavButton from "./components/nav-button";
import { twMerge } from "tailwind-merge";
import { useSidebar } from "@/stores/use-sidebar";
import { useState } from "react";

const Sidebar = () => {
  const location = useLocation();
  const { isOpen, toggleSidebar } = useSidebar();
  const [path, setPath] = useState<string>(location.pathname);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  const handleNavigate = (path: string) => {
    setPath(path);
    navigate(path);
  };

  return (
    <div
      className={twMerge(
        "relative bg-background h-screen",
        "shadow-sm",
        "border-r flex transition-all duration-300 space-y-1 flex-col",
        isOpen ? "w-[200px]" : "w-[60px]",
        "px-2"
      )}
    >
      <div className="flex flex-nowrap px-[10px] my-4 space-x-4 overflow-hidden">
        <LogoOnlyIcon className="size-6 min-w-6" />
        <p className="font-bold">Learnly</p>
      </div>
      <NavButton
        Icon={Home}
        isOpen={isOpen}
        name="Home"
        selected={path === "/"}
        handleClick={() => handleNavigate("/")}
      />
      <NavButton
        Icon={Notebook}
        isOpen={isOpen}
        name="Matérias"
        selected={path === "/materias"}
        handleClick={() => handleNavigate("/materias")}
      />
      <NavButton
        Icon={Grid2x2Check}
        isOpen={isOpen}
        name="Grade curricular"
        selected={path === "/grade"}
        handleClick={() => handleNavigate("/grade")}
      />
      <NavButton
        Icon={DollarSign}
        isOpen={isOpen}
        name="Financeiro"
        selected={path === "/financeiro"}
        handleClick={() => handleNavigate("/financeiro")}
      />
      <Button
        variant={"outline"}
        className="size-6 p-0 !rounded-[90px] absolute top-[50%] right-[-12px]"
        onClick={handleToggleSidebar}
      >
        {isOpen ? (
          <ChevronLeft className="size-4" />
        ) : (
          <ChevronRight className="size-4" />
        )}
      </Button>
    </div>
  );
};

export default Sidebar;
