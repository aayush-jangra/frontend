import { useState } from "react";
import Logo from "../../Assets/Icons/logo.svg";
import { LoginComponent } from "../../Components/LoginComponent";
import { RegisterComponent } from "../../Components/RegisterComponent";

export const LoginPage: React.FC = () => {
  const [existingUser, setExistingUser] = useState(true);

  const openRegisterTab = () => {
    setExistingUser(false);
  };

  const openLoginTab = () => {
    setExistingUser(true);
  };

  return (
    <div className="flex h-full flex-col items-center gap-12">
      <img src={Logo} />
      {existingUser ? (
        <LoginComponent openRegisterTab={openRegisterTab} />
      ) : (
        <RegisterComponent openLoginTab={openLoginTab} />
      )}
    </div>
  );
};
