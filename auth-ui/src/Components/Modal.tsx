import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const firstLoad = useRef(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    firstLoad.current = false;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab (Backwards)
          if (document.activeElement === firstFocusableElementRef.current) {
            e.preventDefault();
            lastFocusableElementRef.current?.focus();
          }
        } else {
          // Tab (Forwards)
          if (document.activeElement === lastFocusableElementRef.current) {
            e.preventDefault();
            firstFocusableElementRef.current?.focus();
          }
        }
      } else if (e.key === "Escape") {
        // Close modal on Escape key
        onClose();
      }
    };

    if (isOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        "a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])"
      );

      if (focusableElements && focusableElements.length > 0) {
        firstFocusableElementRef.current = focusableElements[0] as HTMLElement;
        lastFocusableElementRef.current = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;
        firstFocusableElementRef.current.focus();
      }

      document.addEventListener("keydown", handleTabKey);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={modalRef}
      onClick={onClose}
      tabIndex={2}
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
          className="relative max-w-md w-full m-4"
          onClick={(e) => {
            e.stopPropagation();
          }}
          role="dialog"
          aria-label="Authentication modal"
          tabIndex={0}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
