import { FILTER_OPTIONS } from "../../constants";

const Filter = ({ items }) => {

  
  const renderField = (item) => {
    if (item === FILTER_OPTIONS.date) {
      return <input type="date" />;
    }

    if (item === FILTER_OPTIONS.time) {
      return <input type="time" />;
    }

    if (item === FILTER_OPTIONS.gender) {
      return (
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
      );
    }
  };

  return (
    <div className="flex items-center justify-between text-black p-[20px] bg-white w-full h-full rounded-[10px]">
      <div className="flex-shrink-0">
        <span className="text-md font-semibold text-gray-700">Filter By:</span>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        {items.map((item) => renderField(item))}
      </div>
      <div className="flex-shrink-0">
        <button className="font-bold px-3 py-1 text-red-600 rounded-lg text-sm transition">
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
