import { Button } from "@/components/ui/button";
import { NavButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

const NavButton = (props: NavButtonProps) => {
  const { Icon, name, selected, handleClick } = props;
  return (
    <Button
      variant={selected ? "secondary" : "ghost"}
      className={twMerge(
        "flex flex-nowrap",
        "justify-start",
        "overflow-hidden",
        "h-[42px]",
        "px-[10px]"
      )}
      onClick={handleClick}
    >
      <Icon className="block size-4 min-w-6 mr-[12px]" />
      <p className={twMerge("text-sm")}>{name}</p>
    </Button>
  );
};

export default NavButton;
