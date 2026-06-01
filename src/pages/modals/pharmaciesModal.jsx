import React from "react";
import Modal from "react-modal";
import PharmaciesForm from "../forms/pharmaciesForm";

Modal.setAppElement("#root");

const PharmaciesModal = () => {
  return <PharmaciesForm />;
};

export default PharmaciesModal;
