import { useState } from "react";
import { useUsers } from "../../data/useUsers";
import { TextInput } from "../../common-components/TextInput";
import { AuthErrorMsg } from "../../schema/auth.schema";
import { PasswordInput } from "../../common-components/PasswordInput";

export const RegisterComponent: React.FC<{ openLoginTab: () => void }> = ({
  openLoginTab,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { registerUser } = useUsers();

  const resetFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setErrorMsg("");
  };

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
      resetFields();
    } catch (error) {
      setErrorMsg((error as Error).message);
    }
  };

  return (
    <div className="border-gradient-bg w-full max-w-md">
      <div className="px-6 py-10 rounded-md bg-post flex flex-col gap-11">
        <div
          role="contentinfo"
          tabIndex={0}
          className="flex flex-col gap-2 items-center"
        >
          <div className="font-medium text-sm text-text-tertiary">SIGN UP</div>
          <div className="font-semibold text-white text-lg">
            Create an account to continue
          </div>
        </div>
        <form
          tabIndex={0}
          aria-label="Register Form"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <TextInput
            type="email"
            name="email"
            heading="Email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            errorMsg={errorMsg === AuthErrorMsg.REGISTERED_USER ? errorMsg : ""}
          />
          <TextInput
            type="text"
            name="username"
            heading="Username"
            value={username}
            onChange={handleChange}
            placeholder="Choose a preferred username"
            errorMsg={
              errorMsg === AuthErrorMsg.UNAVAILABLE_USERNAME ? errorMsg : ""
            }
          />
          <PasswordInput
            name="password"
            heading="Password"
            value={password}
            onChange={handleChange}
            placeholder="Choose a strong password"
            errorMsg={errorMsg === AuthErrorMsg.WEAK_PASSWORD ? errorMsg : ""}
          />
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
