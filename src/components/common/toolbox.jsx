import Filter from "./filter";
import Searchbox from "./searchbox";

const Toolbox = () => {
  return (
    <div className="flex gap-2">
      <Searchbox />
      <Filter filterOptions=[] />
    </div>
  );
};

export default Toolbox;
