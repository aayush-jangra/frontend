export const Checkbox = ({
  checked = false,
  content,
  onChange,
}: {
  checked?: boolean;
  content?: string;
  onChange?: () => void;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => onChange?.()}
        type="button"
        className="min-w-4 w-4 min-h-4 h-4 border border-slate-800/75 rounded-md relative p-[1px] flex items-center justify-center"
      >
        <div
          className={`h-full w-full bg-green-500 rounded-lg transition-all duration-500 ${
            checked ? "scale-100" : "scale-0"
          }`}
        ></div>
      </button>
      {content && (
        <div className={checked ? "line-through text-text-subtitle" : ""}>
          {content}
        </div>
      )}
    </div>
  );
};
