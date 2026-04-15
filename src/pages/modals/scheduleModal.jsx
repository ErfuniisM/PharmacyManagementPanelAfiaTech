import Modal from "react-modal";
import ScheduleForm from "../forms/scheduleForm";

Modal.setAppElement("#root");

const ScheduleModal = () => {
  return (
    <div>
      <h4 className="font-bold">Add a capacity</h4>
      <ScheduleForm />
    </div>
  );
};

export default ScheduleModal;
