import React from "react";
import Modal from "react-modal";
import StaffForm from "../forms/staffForm";

Modal.setAppElement("#root");

const StaffModal = () => {
  return <StaffForm />;
};

export default StaffModal;
