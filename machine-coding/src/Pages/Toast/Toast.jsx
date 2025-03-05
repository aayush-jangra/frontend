import { useEffect } from "react";
import { useToast } from "./ToastProvider";
import "./toastStyles.css";

const SingleToast = ({ content, type, id, duration }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const styles = (() => {
    switch (type) {
      case "success":
        return { background: "lightGreen", color: "black" };
      case "warning":
        return { background: "orange", color: "black" };
      case "error":
        return { background: "crimson", color: "white" };
      default:
        return { background: "lightBlue", color: "black" };
    }
  })();

  return (
    <div style={{ ...styles }} className="toast">
      <div>{content}</div>
      <button onClick={() => removeToast(id)} className="crossButton">
        X
      </button>
    </div>
  );
};

export const Toast = () => {
  const { toasts } = useToast();
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <SingleToast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
