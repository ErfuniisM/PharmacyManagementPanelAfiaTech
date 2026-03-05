import Filter from "./filter";
import SearchBox from "./searchbox";

const Toolbox = ({ filters }) => {
  return (
    <div className="flex gap-2">
      <SearchBox />
      <Filter items={filters} />
    </div>
  );
};

export default Toolbox;
