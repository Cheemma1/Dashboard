import DatePicker from "./DatePicker";
import { Bell, ChevronDown } from "lucide-react";
import avatar from "../assets/avatar.png";
import search from "../assets/Icon - Search.png";
const Header = () => {
  return (
    <>
      <div className="py-4 flex items-center justify-between container mx-auto bg-white">
        <h1 className=" font-bold font-plus">Dashboard</h1>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 boreder border-border bg-white rounded-lg p-2 font-inter w-1/2">
            <img src={search} alt="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent"
            />
          </div>
          <DatePicker />
          <div className="rounded-full border p-2">
            <Bell size={16} />
          </div>
          <div className="flex items-center gap-2 border rounded-full p-2 font-inter w-1/3">
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
