// import { useState } from "react";
import Filter from "./filter";
import SearchBox from "./searchbox";

const Toolbox = ({ filters, term, onSearch, onFilter, selectedFilters }) => {
  return (
    <div className="flex gap-2">
      <SearchBox term={term} onSearch={onSearch} />
      <Filter
        items={filters}
        onFilter={onFilter}
        selectedFilters={selectedFilters}
      />
    </div>
  );
};

export default Toolbox;
