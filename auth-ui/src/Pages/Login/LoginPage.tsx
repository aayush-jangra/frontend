import { useState } from "react";
import Logo from "../../Assets/Icons/logo.svg";
import { LoginComponent } from "../../Components/LoginComponent";
import { RegisterComponent } from "../../Components/RegisterComponent";
import { useAuthState } from "../Home/AuthProvider";

export const LoginPage: React.FC<{ isModal?: boolean }> = ({
  isModal = false,
}) => {
  const { closeLoginModal } = useAuthState();
  const [existingUser, setExistingUser] = useState(true);
  const [playCloseAnimation, setPlayCloseAnimation] = useState(false);

  const openRegisterTab = () => {
    setPlayCloseAnimation(true);
    setTimeout(() => {
      setPlayCloseAnimation(false);
      setExistingUser(false);
    }, 300);
  };

  const openLoginTab = () => {
    setPlayCloseAnimation(true);
    setTimeout(() => {
      setPlayCloseAnimation(false);
      setExistingUser(true);
    }, 300);
  };

  return (
    <div className="flex flex-col h-full items-center gap-12 w-full">
      {!isModal && <img src={Logo} />}
      <div
        className={`w-full flex justify-center ${
          playCloseAnimation ? "scale-0" : "scale-100"
        } transition-all duration-300`}
      >
        {isModal && (
          <button
            className="z-50 absolute top-4 right-4 bg-canvas rounded-full h-8 w-8 text-white"
            onClick={closeLoginModal}
          >
            X
          </button>
        )}
        {existingUser ? (
          <LoginComponent openRegisterTab={openRegisterTab} />
        ) : (
          <RegisterComponent openLoginTab={openLoginTab} />
        )}
      </div>
    </div>
  );
};
