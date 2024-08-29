import { useState } from "react";
import Eye from "../Assets/Icons/eye.svg";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string;
  errorMsg?: string;
  forgotPassword?(): void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  heading,
  forgotPassword,
  errorMsg,
  className: customClass,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <div className=""></div>
      <div className="flex w-full justify-between text-text-primary font-medium">
        {heading && <div className="text-sm">{heading}</div>}
        {forgotPassword && (
          <button type="button" onClick={forgotPassword} className="text-xs">
            Forgot password?
          </button>
        )}
      </div>
      <div
        className={`flex gap-2 border-sm rounded bg-transparent focus-within:outline outline-1 outline-white items-center ${
          errorMsg ? "border-red-500" : "border-border-primary"
        } ${customClass}`}
      >
        <input
          type={`${showPassword ? "text" : "password"}`}
          autoComplete="off"
          className="custom-password-input w-full bg-transparent text-text-primary placeholder:text-content p-3 outline-none"
          {...props}
        />
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
          <img className="p-3 cursor-pointer" src={Eye} />
        </button>
      </div>
      {errorMsg && (
        <div className="-mt-2 text-red-500 text-sm italic">{errorMsg}</div>
      )}
    </div>
  );
};
