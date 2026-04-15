import React, { useState } from "react";
import Modal from "react-modal";
import PhatmaciesForm from "../forms/phatmaciesForm";

Modal.setAppElement("#root");

const PhatmaciesModal = () => {
  return (
    <div>
      <h4 className="font-bold">Add a pharmacy</h4>
      <PhatmaciesForm />
    </div>
  );
};

export default PhatmaciesModal;
