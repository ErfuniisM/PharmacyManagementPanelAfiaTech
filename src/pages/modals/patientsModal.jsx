import React from "react";
import Modal from "react-modal";
import StaffForm from "../forms/patientForm";

Modal.setAppElement("#root");

const PatientsModal = () => {
  return (
    <div>
      <h4 className="font-bold">Add a patient</h4>
      <StaffForm />
    </div>
  );
};

export default PatientsModal;
