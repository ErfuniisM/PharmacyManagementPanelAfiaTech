import React from "react";
import { APPOINTMENT_LIST, APPOINTMENT_LIST_ITEMS } from "../../constants";

const Appoinments_list = () => {
  return (
    <table className="bg-white w-12 text-left w-full rounded-2xl">
      <tr>
        {APPOINTMENT_LIST.map((list) => (
          <th className="text-center p-2">{list}</th>
        ))}
      </tr>
      <tr>
        {APPOINTMENT_LIST_ITEMS.map((item) => (
          <td className="text-center p-2">{item}</td>
        ))}
      </tr>
      <tr>
        {APPOINTMENT_LIST_ITEMS.map((item) => (
          <td className="text-center p-2">{item}</td>
        ))}
      </tr>
      <tr>
        {APPOINTMENT_LIST_ITEMS.map((item) => (
          <td className="text-center p-2">{item}</td>
        ))}
      </tr>
      <tr>
        {APPOINTMENT_LIST_ITEMS.map((item) => (
          <td className="text-center p-2">{item}</td>
        ))}
      </tr>
      <tr>
        {APPOINTMENT_LIST_ITEMS.map((item) => (
          <td className="text-center p-2">{item}</td>
        ))}
      </tr>
    </table>
  );
};

export default Appoinments_list;
