interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string;
  errorMsg?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  heading,
  errorMsg = "",
  className: customClass,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      {heading && (
        <div className="font-medium text-sm text-text-primary">{heading}</div>
      )}
      <input
        className={`border-sm rounded bg-transparent text-text-primary placeholder:text-content p-3 ${
          errorMsg ? "border-red-500" : "border-border-primary"
        } ${customClass}`}
        {...props}
      />
      {errorMsg && (
        <div className="-mt-2 text-red-500 text-sm italic">{errorMsg}</div>
      )}
    </div>
  );
};
