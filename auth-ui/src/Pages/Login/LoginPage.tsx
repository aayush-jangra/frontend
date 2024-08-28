import { useState } from "react";
import Logo from "../../Assets/Icons/logo.svg";
import { LoginComponent } from "../../Components/LoginComponent";
import { RegisterComponent } from "../../Components/RegisterComponent";

export const LoginPage: React.FC<{ isModal?: boolean }> = ({
  isModal = false,
}) => {
  const [existingUser, setExistingUser] = useState(true);

  const openRegisterTab = () => {
    setExistingUser(false);
  };

  const openLoginTab = () => {
    setExistingUser(true);
  };

  return (
    <div className="flex flex-col h-full items-center justify-center gap-12 w-full">
      {!isModal && <img src={Logo} />}
      {existingUser ? (
        <LoginComponent openRegisterTab={openRegisterTab} />
      ) : (
        <RegisterComponent openLoginTab={openLoginTab} />
      )}
    </div>
  );
};
