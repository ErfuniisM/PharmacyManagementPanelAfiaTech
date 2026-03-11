import Modal from "react-modal";

const TestModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      className="absolute inset-[40px] rounded-2 bg-amber-100 p-[20px] shadow-sm m-auto w-[50%] outline-none"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="مثال مودال"
    >
      <div className="flex flex-col items-center justify-center">
        <h3>Modal 1</h3>
        <button className="bg-amber-50 w-30 h-20" onClick={onRequestClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default TestModal;
