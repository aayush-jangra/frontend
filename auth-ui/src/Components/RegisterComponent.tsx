import { useState } from "react";
import { useUsers } from "../data/useUsers";

export const RegisterComponent: React.FC<{ openLoginTab: () => void }> = ({
  openLoginTab,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { registerUser } = useUsers();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      registerUser({ username, email, password });
    } catch (error) {
      setErrorMsg((error as Error).message);
    }
  };

  return (
    <div className="border-gradient-bg w-full max-w-md">
      <div className="px-6 py-10 rounded-md bg-post flex flex-col gap-11">
        <div className="flex flex-col gap-2 items-center">
          <div className="font-medium text-sm text-text-tertiary">SIGN UP</div>
          <div className="font-semibold text-white text-lg">
            Create an account to continue
          </div>
        </div>
        {errorMsg && (
          <div className="-my-8 text-red-500 font-semibold text-lg text-center">
            {errorMsg}
          </div>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2.5">
            <div className="font-medium text-sm text-text-primary">Email</div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-medium text-sm text-text-primary">
              Username
            </div>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
              placeholder="Choose a preferred username"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-medium text-sm text-text-primary">
              Password
            </div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="border-sm border-border-primary rounded bg-transparent text-text-primary placeholder:text-content p-3"
              placeholder="Choose a strong password"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="p-3 mt-1 text-white rounded bg-cta font-medium"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={openLoginTab}
              className="font-medium text-sm text-text-tertiary self-start"
            >
              Already have an account?{" "}
              <span className="text-text-primary">Login →</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
