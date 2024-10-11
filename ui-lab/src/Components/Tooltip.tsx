import { useState } from "react";

interface TooltipProps {
  direction?: "top" | "left" | "right" | "bottom";
  theme?: "light" | "dark";
  children: React.ReactNode;
  content: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  direction = "top",
  theme = "light",
  content,
}) => {
  const [showContent, setShowContent] = useState(false);

  const themeClass =
    theme === "light"
      ? "bg-white border-black text-primary"
      : "bg-slate-800 border-white text-white";

  let posClass = "top-0 left-1/2 -translate-y-full -translate-x-1/2 -mt-2";
  if (direction === "bottom") {
    posClass = "bottom-0 left-1/2 translate-y-full -translate-x-1/2 -mb-2";
  } else if (direction === "left") {
    posClass = "top-1/2 left-0 -translate-y-1/2 -translate-x-full -ml-2";
  } else if (direction === "right") {
    posClass = "top-1/2 right-0 -translate-y-1/2 translate-x-full -mr-2";
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {children}
      {showContent && (
        <div
          className={`z-50 absolute ${posClass} border ${themeClass} rounded-xl p-4 w-max shadow-xl`}
        >
          {content}
        </div>
      )}
    </div>
  );
};
