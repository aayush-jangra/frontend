import { useEffect, useRef } from "react";

interface AutoResizeTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * The current value of the textarea.
   */
  value: string;

  /**
   * Function to handle changes in the textarea's value.
   * @param event - The change event triggered by the textarea.
   */
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * A React functional component that renders a textarea element with
 * auto-resizing capabilities based on its content. The textarea grows
 * or shrinks vertically as the user types.
 */
export const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
  value,
  onChange,
  className: customClass,
  placeholder,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Effect hook that adjusts the height of the textarea whenever the value changes.
   * It first resets the height to 'auto' to recalculate the correct scrollHeight,
   * then sets the height to the scrollHeight to ensure the textarea expands or shrinks
   * as needed to fit the content.
   */
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
