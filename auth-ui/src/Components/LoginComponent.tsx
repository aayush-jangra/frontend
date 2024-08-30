import { useState } from "react";
import { useUsers } from "../data/useUsers";
import { TextInput } from "./TextInput";
import { AuthErrorMsg } from "../schema/auth.schema";
import { PasswordInput } from "./PasswordInput";

export const LoginComponent: React.FC<{ openRegisterTab: () => void }> = ({
  openRegisterTab,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { loginUser } = useUsers();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      loginUser(username, password);
    } catch (error) {
      setErrorMsg((error as Error).message);
    }
  };

  return (
    <div className="border-gradient-bg w-full max-w-md">
      <div className="px-6 py-10 rounded-md bg-post flex flex-col gap-11">
        <div tabIndex={0} className="flex flex-col gap-2 items-center">
          <div className="font-medium text-sm text-text-tertiary">
            WELCOME BACK
          </div>
          <div className="font-semibold text-white text-lg">
            Log into your account
          </div>
        </div>
        <form
          tabIndex={0}
          aria-label="Login Form"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <TextInput
            heading="Email or Username"
            value={username}
            onChange={handleChange}
            name="username"
            type="text"
            errorMsg={errorMsg === AuthErrorMsg.DOES_NOT_EXIST ? errorMsg : ""}
            placeholder="Enter your email or username"
          />
          <div className="flex flex-col gap-2.5">
            <PasswordInput
              heading="Password"
              forgotPassword={() => {}}
              value={password}
              onChange={handleChange}
              name="password"
              errorMsg={
                errorMsg === AuthErrorMsg.INVALID_PASSWORD ? errorMsg : ""
              }
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="p-3 mt-1 text-white rounded bg-cta font-medium"
            >
              Login now
            </button>
            <button
              type="button"
              onClick={openRegisterTab}
              className="font-medium text-sm text-text-tertiary self-start"
            >
              Not registered yet?{" "}
              <span className="text-text-primary">Register →</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
