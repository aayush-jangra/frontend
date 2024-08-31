import { useState, createContext, useContext } from "react";

interface AuthContextProps {
  username: string | null;
  isLoginModalOpen: boolean;
  isUserLoggedIn: boolean;
  closeLoginModal(): void;
  loginUser(username: string): void;
  logoutUser(): void;
  requireAuth(callback: () => void): void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const user = localStorage.getItem("user");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!user);
  const [username, setUsername] = useState<string | null>(user);

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const loginUser = (username: string) => {
    localStorage.setItem("user", username);
    setUsername(username);
    setIsUserLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    setIsUserLoggedIn(false);
    setUsername(null);
  };

  const requireAuth = (callback: () => void) => {
    if (isUserLoggedIn) {
      callback();
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        isLoginModalOpen,
        isUserLoggedIn,
        closeLoginModal,
        loginUser,
        logoutUser,
        requireAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }

  return context;
};
