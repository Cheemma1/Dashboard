import Nav from "./Nav";

const Sidebar = () => {
  return (
    <div className=" hidden md:block bg-card p-4 fixed h-full top-0 left-0 bottom-0 z-20">
      <Nav />
    </div>
  );
};

export default Sidebar;
