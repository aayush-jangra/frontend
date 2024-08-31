import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string; // Optional heading text displayed above the input field
  errorMsg?: string; // Optional error message displayed below the input field
}

/**
 * TextInput
 *
 * This component renders a customizable text input field with an optional heading and error message.
 * It can be used for various text input scenarios and includes styling based on error states.
 */
export const TextInput: React.FC<TextInputProps> = ({
  heading,
  errorMsg = "",
  className: customClass,
  required = true,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      {heading && (
        <div className="font-medium text-sm text-text-primary">{heading}</div>
      )}
      <input
        placeholder={placeholder}
        required={required}
        className={`border-sm rounded bg-transparent text-text-primary placeholder:text-content p-3 ${
          errorMsg ? "border-red-500" : "border-border-primary"
        } ${customClass}`}
        {...props}
      />
      {errorMsg && (
        <div
          role="alert"
          aria-label={errorMsg}
          className="-mt-2 text-red-500 text-sm italic"
        >
          {errorMsg}
        </div>
      )}
    </div>
  );
};
