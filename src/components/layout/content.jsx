import { useState } from "react";
import Modal from "react-modal";
import TestModal from "../../pages/testModal";
Modal.setAppElement("#root");
const Content = ({ children, title, buttonTitle }) => {
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
      <TestModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Content;
