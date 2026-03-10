import Modal from "react-modal";

const TestModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="مثال مودال"
    >
      <h2>محتوای مودال</h2>
      <p>این یک مودال ساده است.</p>
      <button onClick={onRequestClose}>بستن</button>
    </Modal>
  );
};

export default TestModal;
