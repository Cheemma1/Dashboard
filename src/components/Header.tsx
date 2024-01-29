import DatePicker from "./DatePicker";
import {
  Bell,
  ChevronDown,
  CreditCard,
  Settings,
  User,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import avatar from "../assets/avatar.png";
import search from "../assets/Icon - Search.png";
const Header = () => {
  return (
    <div className=" ml-10  bg-background fixed w-full top-0  z-10 pr-10">
      <div className="py-2 flex items-center justify-between container  mx-auto">
        <h1 className=" font-bold font-plus">Dashboard</h1>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 border border-border bgb rounded-full p-2 font-inter w-1/2">
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

          <DropdownMenu>
            <DropdownMenuTrigger className=" w-1/3 outline-none">
              {" "}
              <div className="flex items-center gap-2 border rounded-full p-2 font-inter w-full">
                <img src={avatar} alt="avatr" />

                <div>
                  <h3 className="text-sm font-inter">Julius Berger</h3>
                  <p className="text-xs font-inter">Julius@gmail.com</p>
                </div>
                <ChevronDown size={20} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <div>
                  <h3 className="text-sm font-inter">Julius Berger</h3>
                  <p className="text-xs font-inter">Julius@gmail.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                Team
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="bg-line w-full h-px"></div>
    </div>
  );
};

export default Header;
