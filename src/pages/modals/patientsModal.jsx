import Modal from "react-modal";

import PatientForm from "../forms/patientForm";

Modal.setAppElement("#root");

const PatientsModal = () => {
  return <PatientForm />;
};

export default PatientsModal;
