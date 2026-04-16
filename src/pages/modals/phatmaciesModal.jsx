import React, { useState } from "react";
import Modal from "react-modal";
import PhatmaciesForm from "../forms/phatmaciesForm";

Modal.setAppElement("#root");

const PhatmaciesModal = () => {
  return <PhatmaciesForm />;
};

export default PhatmaciesModal;
