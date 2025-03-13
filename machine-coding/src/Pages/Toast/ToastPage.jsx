import { useState } from "react";
import { useToast } from "./ToastProvider";

const ToastPage = () => {
  const { createToast } = useToast();
  const [duration, setDuration] = useState(3000);

  const handleChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div className="page-container">
      <button
        className="toast-button"
        onClick={() =>
          createToast("success", "This is a success toast", Number(duration))
        }
      >
        Success
      </button>
      <button
        className="toast-button"
        onClick={() =>
          createToast("warning", "This is a warning toast", Number(duration))
        }
      >
        Warning
      </button>
      <button
        className="toast-button"
        onClick={() =>
          createToast("info", "This is an info toast", Number(duration))
        }
      >
        Info
      </button>
      <button
        className="toast-button"
        onClick={() =>
          createToast("error", "This is an error toast", Number(duration))
        }
      >
        Error
      </button>
      <label className="duration-label">
        Duration (ms):
        <input
          className="duration-input"
          type="number"
          value={duration}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ToastPage;
