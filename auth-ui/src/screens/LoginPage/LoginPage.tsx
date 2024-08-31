import { useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import { useAuthState } from "../../providers/AuthProvider";
import { RegisterComponent } from "./RegisterComponent";
import { LoginComponent } from "./LoginComponent";

/**
 * LoginPage component that renders either the login or registration form based on the state.
 * Handles animations and modal functionality if applicable.
 */
export const LoginPage: React.FC<{ isModal?: boolean }> = ({
  isModal = false,
}) => {
  const { closeLoginModal } = useAuthState();
  const [existingUser, setExistingUser] = useState(true);
  const [playCloseAnimation, setPlayCloseAnimation] = useState(false);

  /**
   * Switches to the registration tab with an animation.
   * Sets a timeout to reset animation state and change to registration view.
   */
  const openRegisterTab = () => {
    setPlayCloseAnimation(true);
    setTimeout(() => {
      setPlayCloseAnimation(false);
      setExistingUser(false);
    }, 300); // Duration matches the animation time
  };

  /**
   * Switches to the login tab with an animation.
   * Sets a timeout to reset animation state and change to login view.
   */
  const openLoginTab = () => {
    setPlayCloseAnimation(true);
    setTimeout(() => {
      setPlayCloseAnimation(false);
      setExistingUser(true);
    }, 300); // Duration matches the animation time
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
