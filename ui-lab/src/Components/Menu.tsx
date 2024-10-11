export const Menu = ({
  open = false,
  items,
  onClose,
  onChange,
  children,
}: {
  open?: boolean;
  items: { id: string; content: string | React.ReactNode }[];
  onChange?: (newValue: string) => void;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      {open && (
        <div
          className="fixed top-0 left-0 h-screen w-screen z-40"
          onClick={onClose}
        ></div>
      )}
      {children}
      {open && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full z-50 p-2 border-slate-800 bg-slate-800/75 text-white rounded-3xl shadow-box-focus shadow-black">
          {items.map((item) => (
            <button
              onClick={() => onChange?.(item.id)}
              type="button"
              className="hover:bg-slate-800 px-4 py-2 rounded-full"
              key={item.id}
            >
              {item.content}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
