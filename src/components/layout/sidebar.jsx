import { Link } from "react-router-dom";
import { SIDEBAR_MENU_ITEMS } from "../../constants";

const Sidebar = () => {
  return (
    <aside className=" flex-1/6  h-screen items-center gap-6 bg-[#FFFFFF] text-white p-6 shadow-md">
      <h2 className="text-2xl text-center font-bold mb-8 text-[#000000]">
        Afia
        <span className="font-light">Tech</span>
      </h2>
      <nav className="flex flex-col gap-8 space-y-4">
        {SIDEBAR_MENU_ITEMS.map((menu) => (
          <a className="flex font-bold text-[14px] text-[#000000]  items-center gap-2">
            <img src={menu.src} />
            {menu.item}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
