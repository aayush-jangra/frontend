import React, { useContext, useState } from "react";
import { Toast } from "./Toast";

const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const createToast = (type, content, duration = 3000) => {
    setToasts((prev) => [...prev, { id: Date.now(), type, content, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
      {!!toasts.length && <Toast />}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context !== undefined) {
    return context;
  }

  throw new Error("useToast should only be used inside ToastProvider");
};
