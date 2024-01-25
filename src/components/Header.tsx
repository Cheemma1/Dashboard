import { Input } from "@/components/ui/input";
import DatePicker from "./DatePicker";
import { Bell, ChevronDown } from "lucide-react";
import avatar from "../assets/avatar.png";
const Header = () => {
  return (
    <>
      <div className="py-4 flex items-center justify-between container mx-auto">
        <h1 className=" font-bold font-plus">Dashboard</h1>
        <div className="flex items-center justify-between gap-4">
          <Input type="text" id="text" placeholder="Search" />
          <DatePicker />
          <div className="rounded-full border p-2">
            <Bell size={16} />
          </div>
          <div className="flex items-center gap-2 border rounded-full p-2 w-3/5 font-inter">
            <img src={avatar} alt="avatr" />
            <div>
              <h3 className="text-sm">Julius Berger</h3>
              <p className="text-xs">Julius@gmail.com</p>
            </div>
            <ChevronDown />
          </div>
        </div>
      </div>
      <div className="bg-line w-full h-px"></div>
    </>
  );
};

export default Header;
