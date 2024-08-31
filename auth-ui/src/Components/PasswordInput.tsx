import { useState } from "react";
import Eye from "../assets/icons/eye.svg";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string; // Optional heading for the input field
  errorMsg?: string; // Optional error message to display
  forgotPassword?(): void; // Optional callback function for "Forgot password?" action
}

/**
 * PasswordInput Component
 *
 * This component renders a password input field with a toggle to show or hide the password.
 * It includes optional features like a heading, a "Forgot password?" link, and an error message display.
 */
export const PasswordInput: React.FC<PasswordInputProps> = ({
  heading,
  forgotPassword,
  errorMsg,
  className: customClass,
  required = true, // By default, the input is required
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2.5">
      {/* Optional heading and "Forgot password?" link */}
      <div className="flex w-full justify-between text-text-primary font-medium">
        {heading && <div className="text-sm">{heading}</div>}
        {forgotPassword && (
          <button type="button" onClick={forgotPassword} className="text-xs">
            Forgot password?
          </button>
        )}
      </div>
      {/* Password input field with show/hide toggle */}
      <div
        className={`flex gap-2 border-sm rounded bg-transparent focus-within:outline outline-1 outline-white items-center ${
          errorMsg ? "border-red-500" : "border-border-primary"
        } ${customClass}`}
      >
        <input
          required={required}
          type={showPassword ? "text" : "password"}
          autoComplete="off" // Prevent autocomplete for security
          className="custom-password-input w-full bg-transparent text-text-primary placeholder:text-content p-3 outline-none"
          {...props}
        />
        {/* Button to toggle password visibility */}
        <button
          type="button"
          className="relative shrink-0"
          onClick={toggleShowPassword}
        >
          <div className="absolute inset-1/2">
            <div
              className={`bg-content border-post rounded rotate-45 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                showPassword ? "w-6 p-[1px] border" : "w-0 p-0 border-0"
              }`}
            ></div>
          </div>
          <img
            alt={showPassword ? "Hide Password" : "Show Password"}
            className="p-3 cursor-pointer"
            src={Eye}
          />
        </button>
      </div>
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
