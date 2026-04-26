// import Filter from "./filter";
// import SearchBox from "./searchbox";

// const Toolbox = ({
//   filters,
//   term,
//   onSearch,
//   onFilter,
//   onReset,
//   selectedFilters,
// }) => {
//   return (
//     <div className="flex gap-2">
//       <SearchBox term={term} onSearch={onSearch} />
//       <Filter
//         items={filters}
//         onFilter={onFilter}
//         onReset={onReset}
//         selectedFilters={selectedFilters}
//       />
//     </div>
//   );
// };

// export default Toolbox;

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
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full">
      <div className="w-full sm:w-auto sm:flex-1">
        <SearchBox term={term} onSearch={onSearch} />
      </div>
      <div className="w-full sm:w-auto">
        <Filter
          items={filters}
          onFilter={onFilter}
          onReset={onReset}
          selectedFilters={selectedFilters}
        />
      </div>
    </div>
  );
};

export default Toolbox;
