interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} tabIndex={2} className="fixed inset-0 z-[999]">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-[1000]">
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
