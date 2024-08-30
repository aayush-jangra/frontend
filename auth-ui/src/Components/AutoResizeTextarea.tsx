import { useEffect, useRef } from "react";

interface AutoResizeTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
  value,
  onChange,
  className: customClass,
  placeholder,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      aria-label={placeholder}
      placeholder={placeholder}
      ref={textareaRef}
      value={value}
      onChange={onChange}
      className={`resize-none outline-0 max-h-64 bg-transparent w-full text-text-primary placeholder:text-content mt-3 sm:-mb-3 ${customClass}`}
      {...props}
    />
  );
};
