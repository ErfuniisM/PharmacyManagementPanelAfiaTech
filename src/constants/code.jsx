import { useState } from "react";

const SimpleFilterToolbar = () => {
  const [filters, setFilters] = useState({
    date: "",
    time: "",
    status: "",
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({
      date: "",
      time: "",
      status: "",
    });
  };

  return (
    <div className="flex items-center justify-center text-black p-[20px] bg-white w-full h-full rounded-[10px]">
      <div className="flex-shrink-0">
        <span className="text-md font-semibold text-gray-700">Filter By:</span>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        <label className="font-bold text-gray-600">Date:</label>
        <input
          type="date"
          value={filters.date}
          onChange={(e) => handleFilterChange("date", e.target.value)}
          className="p-1 rounded-md text-sm"
        />
        <label className="font-bold text-gray-600">Time:</label>
        <input
          type="time"
          value={filters.time}
          onChange={(e) => handleFilterChange("time", e.target.value)}
          className="p-1  rounded-md text-sm"
        />

        <label className="font-bold text-gray-600">Status:</label>
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="p-1 border border-gray-300 rounded-md text-sm bg-white"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="flex-shrink-0">
        <button
          onClick={handleReset}
          className="font-bold px-3 py-1 text-red-600 rounded-lg text-sm transition"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default SimpleFilterToolbar;
