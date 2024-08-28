import { useState } from "react";
import { useUsers } from "../data/useUsers";

export const LoginComponent: React.FC<{ openRegisterTab: () => void }> = ({
  openRegisterTab,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const { isValidUser } = useUsers();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidUser(username, password)) {
      setError(true);
    }
  };

  return (
    <div className="border-gradient-bg w-full max-w-md">
      <div className="px-6 py-10 rounded-md bg-post flex flex-col gap-11">
        <div className="flex flex-col gap-2 items-center">
          <div className="font-medium text-sm text-text-tertiary">
            WELCOME BACK
          </div>
          <div className="font-semibold text-white text-lg">
            Log into your account
          </div>
        </div>
        {isError && (
          <div className="-my-8 text-red-500 font-semibold text-lg text-center">
            Invalid credentials
          </div>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2.5">
            <div className="font-medium text-sm text-text-primary">
              Email or Username
            </div>
            <input
              value={username}
              onChange={handleChange}
              name="username"
              type="text"
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
              placeholder="Enter your email or username"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex w-full justify-between">
              <div className="font-medium text-sm text-text-primary">
                Password
              </div>
              <button
                type="button"
                onClick={() => {}}
                className="font-medium text-xs text-text-primary"
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
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
