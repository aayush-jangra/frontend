import { useState } from "react";
import { Modal } from "./Modal";

export const ModalPage = () => {
  const [open, setOpen] = useState(false);

  const onModalClose = () => {
    setOpen(false);
  };

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleModal}>Show Modal</button>
      <Modal open={open} onClose={onModalClose}>
        <div className="modal-inner-content">I am a modal</div>
      </Modal>
    </div>
  );
};
