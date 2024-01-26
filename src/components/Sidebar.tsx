import logo from "../assets/Vector.png";
import catergory from "../assets/category.png";
import trend from "../assets/trend-up.png";
import profile from "../assets/profile-2user.png";
import box from "../assets/box.png";
import frame from "../assets/discount-shape.png";
import info from "../assets/info-circle.png";
import light from "../assets/Frame 427319676.svg";
import moon from "../assets/moon 1.png";
import arrowright from "../assets/arrow-right.png";
import setting from "../assets/setting-2.png";
import logout from "../assets/logout.png";
const Sidebar = () => {
  return (
    <div className=" bg-white  p-4 fixed h-full top-0 left-0 bottom-0 z-20">
      <div className="flex flex-col gap-5 pb-20 pt-2">
        <img src={logo} alt="logo" className="w-6" />
        <img src={catergory} alt="logo" className="w-6" />
        <img src={trend} alt="logo" className="w-6" />
        <img src={profile} alt="logo" className="w-6" />
        <img src={box} alt="logo" className="w-6" />
        <img src={frame} alt="logo" className="w-6" />
        <img src={info} alt="logo" className="w-6" />
        <img src={light} alt="logo" className="w-6" />
        <img src={moon} alt="logo" className="w-6" />
      </div>
      <div className="flex flex-col gap-5">
        <img src={arrowright} alt="logo" className="w-6" />
        <img src={setting} alt="logo" className="w-6" />
        <img src={logout} alt="logo" className="w-6" />
      </div>
    </div>
  );
};

export default Sidebar;
