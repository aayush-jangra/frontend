import { useState, createContext, useContext } from "react";

interface AuthContextProps {
  isLoginModalOpen: boolean;
  closeLoginModal(): void;
  requireAuth(callback: () => void): void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const requireAuth = (callback: () => void) => {
    const username = localStorage.getItem("user");

    if (username) {
      callback();
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoginModalOpen, closeLoginModal, requireAuth }}
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
