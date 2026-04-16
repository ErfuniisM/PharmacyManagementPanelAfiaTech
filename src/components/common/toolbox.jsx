import Filter from "./filter";
import SearchBox from "./searchbox";

const Toolbox = ({
  filters,
  term,
  onSearch,
  onFilter,
  onReset,
  selectedFilters,
}) => {
  return (
    <div className="flex gap-2">
      <SearchBox term={term} onSearch={onSearch} />
      <Filter
        items={filters}
        onFilter={onFilter}
        onReset={onReset}
        selectedFilters={selectedFilters}
      />
    </div>
  );
};

export default Toolbox;
