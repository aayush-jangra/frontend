import { useEffect } from "react";
import "./modalStyles.css";

export const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    const escapeHandler = (e) => {
      e.preventDefault();
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keyup", escapeHandler);
    }

    return () => {
      document.removeEventListener("keyup", escapeHandler);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} className="modal-container">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-content-container"
      >
        <div onClick={onClose} className="modal-close-button">
          X
        </div>
        {children}
      </div>
    </div>
  );
};
