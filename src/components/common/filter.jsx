import { FILTER_OPTIONS } from "../../constants";

const Filter = ({ items, onFilter, onReset, selectedFilters }) => {
  const renderField = (item) => {
    if (item === FILTER_OPTIONS.date) {
      return (
        <input
          type="date"
          value={selectedFilters.date || ""}
          onChange={(e) =>
            onFilter((prev) => ({ ...prev, date: e.target.value }))
          }
        />
      );
    }

    if (item === FILTER_OPTIONS.time) {
      return <input type="time" />;
    }

    if (item === FILTER_OPTIONS.gender) {
      return (
        <select
          value={selectedFilters.gender}
          onChange={(t) =>
            onFilter((perv) => ({ ...perv, gender: t.target.value }))
          }
        >
          <option>All</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      );
    }

    if (item === FILTER_OPTIONS.status) {
      return (
        <select
          value={selectedFilters.status}
          onChange={(t) =>
            onFilter((perv) => ({ ...perv, status: t.target.value }))
          }
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      );
    }

    if (item === FILTER_OPTIONS.status2) {
      return (
        <select
          value={selectedFilters.status}
          onChange={(t) =>
            onFilter((perv) => ({ ...perv, status: t.target.value }))
          }
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      );
    }

    if (item === FILTER_OPTIONS.spec) {
      return (
        <select
          value={selectedFilters.spec}
          onChange={(t) =>
            onFilter((perv) => ({ ...perv, spec: t.target.value }))
          }
        >
          <option>All</option>
          <option>Cardioiogy</option>
          <option>Dematology</option>
        </select>
      );
    }

    if (item === FILTER_OPTIONS.depart) {
      return (
        <select
          value={selectedFilters.depart}
          onChange={(t) =>
            onFilter((perv) => ({ ...perv, depart: t.target.value }))
          }
        >
          <option>All</option>
          <option>Cardioiogy</option>
          <option>Dematology</option>
        </select>
      );
    }

    if (item === FILTER_OPTIONS.ins) {
      return (
        <select
          value={selectedFilters.ins}
          onChange={(t) =>
            onFilter((perv) => ({ ...perv, ins: t.target.value }))
          }
        >
          <option>All</option>
          <option>Covered</option>
          <option>Not Covered</option>
        </select>
      );
    }

    if (item === FILTER_OPTIONS.wh) {
      return <input type="time" />;
    }

    if (item === FILTER_OPTIONS.branch) {
      return (
        <select
          value={selectedFilters.branch}
          onChange={(t) =>
            onFilter((perv) => ({ ...perv, branch: t.target.value }))
          }
        >
          <option>All</option>
          <option>Riyadh</option>
          <option>Jeddah</option>
          <option>Median</option>
        </select>
      );
    }

    if (item === FILTER_OPTIONS.dist) {
      return (
        <select>
          <option>+++++</option>
          <option>----</option>
        </select>
      );
    }
  };

  return (
    <div className="flex  items-center justify-around shadow-sm text-black  bg-white w-full rounded-[10px]">
      <div className="flex items-center h-full">
        <span className="text-md font-semibold text-gray-700">Filter By</span>
      </div>
      <div className="flex items-center h-full gap-10">
        {items.map((item) => renderField(item))}
      </div>
      <div className="flex items-center h-full">
        <button
          onClick={onReset}
          className="font-bold px-3 py-1 text-red-600 rounded-lg text-sm transition cursor-pointer"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
