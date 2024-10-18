import { useState } from "react";
import { Modal } from "./Modal";

interface InputModalProps {
  isOpen: boolean;
  title: string;
  placeholder?: string;
  maxLen?: number;
  isTextArea?: boolean;
  onClose: () => void;
  onSubmit: (content: string) => void;
}

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  maxLen,
  isTextArea,
  onClose,
  onSubmit,
}: InputModalProps) => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (!value) {
      setIsError(true);
    } else {
      onSubmit(value);
      setValue("");
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full border border-slate-700 bg-zinc-400 rounded-3xl">
        <div className="bg-slate-700 rounded-t-xl p-4 text-3xl text-white font-bold italic">
          {title}
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div>
            {isTextArea ? (
              <textarea
                placeholder={placeholder}
                className={`rounded w-full p-2 bg-gray-200 border min-h-56 h-full ${
                  isError ? "border-red-500" : "border-slate-600"
                }`}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setIsError(false);
                }}
                maxLength={maxLen}
              />
            ) : (
              <input
                type="text"
                className={`rounded w-full p-4 bg-gray-200 border ${
                  isError ? "border-red-500" : "border-slate-600"
                }`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setIsError(false);
                }}
                maxLength={maxLen}
              />
            )}
            {isError && (
              <label className="text-red-500 italic">
                Value cannot be empty
              </label>
            )}
          </div>
          <button
            type="button"
            className="self-end rounded-xl bg-green-500 px-4 py-2 w-full max-w-24 font-bold text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};
