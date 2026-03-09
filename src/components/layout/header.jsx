import { format } from "date-fns";
import Avatar from "../common/avatar";
import TitleUser from "../common/titleUser";
let newDate = new Date();
const Header = () => {
  return (
    <header className=" w-full h-[85px] bg-white shadow-md flex justify-between items-center px-6">
      <div>
        <TitleUser username="Erfan" />
        <span className="text-sm">{format(newDate, "EEEE, MMMM d, yyyy")}</span>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50px] bg-amber-100 ">
          <img src="../../../public/icons/notification.svg" alt="" />
        </div>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
