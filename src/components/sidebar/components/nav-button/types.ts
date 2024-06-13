import { LucideProps } from "lucide-react";

export type NavButtonProps = {
  isOpen: boolean;
  Icon: React.FC<LucideProps>;
  name: string;
  selected: boolean;
  handleClick: () => void;
};
