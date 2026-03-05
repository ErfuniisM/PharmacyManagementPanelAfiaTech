import { useState } from "react";

const date = () => {
  const [filters, setFilters] = useState({
    date: "",
    time: "",
    status: "",
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <input
      type="date"
      value={filters.date}
      onChange={(e) => handleFilterChange("date", e.target.value)}
      className="p-1 rounded-md text-sm"
    />
  );
};

export default date;
