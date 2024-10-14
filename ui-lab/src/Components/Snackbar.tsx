import { createContext, useContext, useState } from "react";
import { IconButton } from "./IconButton";

interface SnackbarContextProps {
  createSnackbar: (content: React.ReactNode, duration?: number) => void;
}

const SnackbarContext = createContext<SnackbarContextProps | null>(null);

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackbars, setSnackbars] = useState<
    { id: number; content: React.ReactNode }[]
  >([]);

  function createSnackbar(content: React.ReactNode, duration: number = 7500) {
    setSnackbars((prev) => {
      const id = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;
      setTimeout(() => {
        removeSnackbar(id);
      }, duration);
      return [...prev, { id, content }];
    });
  }

  function removeSnackbar(id: number) {
    setSnackbars((prev) => [...prev].filter((item) => item.id !== id));
  }

  return (
    <SnackbarContext.Provider value={{ createSnackbar }}>
      {children}
      <div className="fixed bottom-12 right-12">
        <div className="relative flex flex-col gap-4">
          {snackbars.map(({ id, content }) => (
            <div
              key={id}
              className="animate-snackbarOpening py-3 px-4 bg-slate-700 text-white shadow-black rounded-2xl shadow-box-focus min-w-64 font-semibold text-lg flex justify-between items-center"
            >
              {content}
              <IconButton onClick={() => removeSnackbar(id)}>X</IconButton>
            </div>
          ))}
        </div>
      </div>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbar should be used inside SnackbarProvider");
  }

  return context;
};
