import React from "react";
import Modal from "react-modal";
import StaffForm from "../forms/staffForm";

Modal.setAppElement("#root");

const StaffModal = () => {
  return (
    <div>
      <h4 className="font-bold">Add a staff member</h4>
      <StaffForm />
    </div>
  );
};

export default StaffModal;
