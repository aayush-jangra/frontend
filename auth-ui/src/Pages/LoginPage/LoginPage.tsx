import { useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import { useAuthState } from "../../providers/AuthProvider";
import { RegisterComponent } from "./RegisterComponent";
import { LoginComponent } from "./LoginComponent";

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
      {!isModal && <img alt="App logo" src={Logo} />}
      <div
        className={`w-full flex justify-center ${
          playCloseAnimation ? "scale-0" : "scale-100"
        } transition-all duration-300`}
      >
        {isModal && (
          <button
            aria-label="Close modal"
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
