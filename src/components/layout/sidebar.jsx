import { useState, useEffect } from "react";
import { SIDEBAR_MENU_ITEMS } from "../../constants";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const [activeClass, setActiveClass] = useState("");

  const location = useLocation();

  useEffect(() => {
    let newItem = "";
    SIDEBAR_MENU_ITEMS.forEach((menu) => {
      if (location.pathname === menu.link) {
        newItem = menu.item;
      }
    });
    setActiveClass(newItem);
  }, [location.pathname]);

  return (
    <aside className=" flex-1/6  h-screen items-center gap-6 bg-[#FFFFFF] text-white p-6 shadow-md">
      <h2 className="text-2xl text-center font-bold mb-8 text-[#000000]">
        Afia
        <span className="font-light">Tech</span>
      </h2>
      <nav className="flex flex-col gap-8 space-y-4">
        {SIDEBAR_MENU_ITEMS.map((menu) => (
          <Link
            // onClick={() => setActiveClass("bg-amber-300 p-2 rounded-2xl")}
            onClick={() => setActiveClass(menu.item)}
            to={menu.link}
            className={`flex font-bold text-[14px] text-[#000000] items-center gap-2 p-2 rounded-[5px] ${
              activeClass === menu.item ? "bg-emerald-500 text-white" : ""
            }`}
            key={menu.item}
          >
            <img src={menu.src} />
            {menu.item}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
