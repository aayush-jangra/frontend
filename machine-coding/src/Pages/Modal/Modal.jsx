import "./modalStyles.css";

export const Modal = ({ children, open, onClose }) => {
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
