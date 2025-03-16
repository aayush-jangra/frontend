import { useState } from "react";
import { CustomSwitch } from "../../components/CustomSwitch";
import "./passwordGeneratorStyles.css";
import { useGeneratePassword } from "./useGeneratePassword";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState(null);
  const [passwordLength, setPasswordLength] = useState(4);
  const [config, setConfig] = useState({
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false,
  });
  const generatePassword = useGeneratePassword();

  const handleChange = (e) => {
    setConfig((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleGenerate = () => {
    setPassword(generatePassword(config, passwordLength));
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied");
  };

  return (
    <div className="password-generator-container">
      <div className="password-generator-password">
        {password || "Generate Password"}
        <button
          disabled={!password}
          onClick={copyPassword}
          className="password-generator-copy-button"
        >
          Copy
        </button>
      </div>
      <div>
        <label className="password-generator-label password-generator-length-input">
          Password Length:
          <input
            style={{ flex: 1 }}
            type="range"
            min={4}
            max={16}
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          {passwordLength}
        </label>
      </div>
      <div className="password-generator-config-container">
        <label className="password-generator-label">
          <CustomSwitch
            name="uppercase"
            checked={config.uppercase}
            onChange={handleChange}
          />
          Include uppercase letters
        </label>
        <label className="password-generator-label">
          <CustomSwitch
            name="lowercase"
            checked={config.lowercase}
            onChange={handleChange}
          />
          Include lowercase letters
        </label>
        <label className="password-generator-label">
          <CustomSwitch
            name="numbers"
            checked={config.numbers}
            onChange={handleChange}
          />
          Include numbers
        </label>
        <label className="password-generator-label">
          <CustomSwitch
            name="symbols"
            checked={config.symbols}
            onChange={handleChange}
          />
          Include symbols
        </label>
      </div>
      <button
        className="password-generator-generate-button"
        onClick={handleGenerate}
      >
        Generate Password
      </button>
    </div>
  );
};
