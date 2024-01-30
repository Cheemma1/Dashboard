import { X } from "lucide-react";
import Nav from "./Nav";

interface NavMobileProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobNav = ({ open, setOpen }: NavMobileProps) => {
  return (
    <div className=" bg-card top-0 right-0 fixed h-screen p-4">
      <X onClick={() => setOpen(!open)} className="cursor-pointer my-2" />
      <Nav />
    </div>
  );
};

export default MobNav;
