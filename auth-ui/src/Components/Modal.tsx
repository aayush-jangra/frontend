import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  let firstLoad = useRef(true);

  useEffect(() => {
    firstLoad.current = false;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 ${
        isOpen && !firstLoad.current ? "scale-100" : "animate-quickScaleDown"
      } ${firstLoad.current ? "scale-0" : ""}`}
    >
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs ${
          isOpen ? "animate-fadeIn" : "animate-fadeOut"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          isOpen ? "animate-modalLoadIn" : "animate-modalLoadOut"
        }`}
      >
        <div
          className="relative z-10 max-w-md w-full m-4"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            className="absolute top-4 right-4 bg-canvas rounded-full h-8 w-8 text-white"
            onClick={onClose}
          >
            X
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
