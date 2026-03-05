import { APPOINTMENT } from "../../constants";
import { APPOINTMENT_TITLE } from "../../constants";

const Appoinments = () => {
  return (
    <table className="bg-white w-12 text-left w-full rounded-2xl">
      <thead>
        <tr>
          {APPOINTMENT_TITLE.map((item) => (
            <th className="text-center p-2">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {APPOINTMENT.map((item) => (
            <td className="text-center p-2">{item}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Appoinments;
