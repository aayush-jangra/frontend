interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="hover:bg-slate-800/40 hover:border-slate-800 rounded-full w-6 h-6 text-center hover:text-white transition-all duration-500"
    >
      {children}
    </button>
  );
};
