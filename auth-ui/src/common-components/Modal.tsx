import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

/**
 * Modal Component
 *
 * This component renders a modal dialog that appears over the current page content.
 * It supports accessibility features such as focus trapping and closing the modal with the Escape key.
 */
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Track whether the component is loading for the first time to avoid animation on page render
  const firstLoad = useRef(true);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLElement | null>(null);

  /**
   * Effect hook that manages side effects when the modal is opened or closed.
   * It handles disabling scrolling on the body when the modal is open, and sets up focus trapping.
   */
  useEffect(() => {
    firstLoad.current = false;

    // Disable page scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    /**
     * Handles keyboard navigation inside the modal.
     * - Traps focus within the modal when Tab or Shift+Tab is pressed.
     * - Closes the modal when the Escape key is pressed.
     */
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab (Backwards navigation)
          if (document.activeElement === firstFocusableElementRef.current) {
            e.preventDefault();
            lastFocusableElementRef.current?.focus();
          }
        } else {
          // Tab (Forwards navigation)
          if (document.activeElement === lastFocusableElementRef.current) {
            e.preventDefault();
            firstFocusableElementRef.current?.focus();
          }
        }
      } else if (e.key === "Escape") {
        // Close the modal on Escape key press
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
  }, [isOpen, onClose, children]);

  return (
    <div
      ref={modalRef}
      onClick={onClose}
      tabIndex={2}
      className={`fixed inset-0 ${
        isOpen && !firstLoad.current ? "scale-100" : "animate-quickScaleDown"
      } ${firstLoad.current ? "scale-0" : ""}`}
    >
      {/* Background overlay */}
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
            e.stopPropagation(); // Prevent closing the modal when clicking inside the content area
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
