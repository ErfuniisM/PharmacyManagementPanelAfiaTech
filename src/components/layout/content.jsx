import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Content = ({ children, title, buttonTitle, modal, modalTitle }) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex justify-between items-center h-16">
        <h3>{title}</h3>
        {buttonTitle && (
          <button
            onClick={openModal}
            className="flex items-center justify-center text-white p-[20px] bg-red-500 w-fit h-full rounded-[10px] cursor-pointer"
          >
            {buttonTitle}
          </button>
        )}
      </div>
      {children}
      <Modal
        className="absolute inset-[40px] rounded-2 bg-amber-100 p-[20px] shadow-sm m-auto w-[50%] outline-none"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="flex flex-col items-center justify-center">
          <h3>{modalTitle}</h3>
          <button className="bg-amber-50 w-30 h-20" onClick={closeModal}>
            Close
          </button>
        </div>
        {modal}
      </Modal>
    </div>
  );
};

export default Content;
