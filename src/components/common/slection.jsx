import React from "react";

const Slection = () => {
  return (
    <form className="flex gap-10" action="">
      <label>Filter By</label>
      <div>
        <label>Date</label>
        <select name="" id="">
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select name="" id="">
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select name="" id="">
          <option value="">1</option>
          <option value="">1</option>
          <option value="">1</option>
        </select>
      </div>
      <button className="text-red-600">Reset Filter</button>
    </form>
  );
};

export default Slection;
