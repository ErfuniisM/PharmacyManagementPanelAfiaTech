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
        className="absolute inset-[40px] rounded-[30px] bg-white shadow-2xl p-[40px]  m-auto w-[50%] h-[75%] outline-none"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="flex flex-col  justify-space ">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">{modalTitle}</p>
            <button
              className="font-bold cursor-pointer text-gray-500 text-2xl "
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
        {modal}
      </Modal>
    </div>
  );
};

export default Content;
