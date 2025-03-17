import { useTheme } from "../utils/useTheme";

export const ThemeToggle = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div
      onClick={switchTheme}
      style={
        theme === "light"
          ? { boxShadow: "3px 3px 4px black" }
          : { boxShadow: "-3px 3px white" }
      }
      className="theme-toggle-container"
    >
      <div
        style={
          theme === "light" ? {} : { backgroundColor: "rgb(218, 218, 218)" }
        }
        className="theme-toggle-before"
      ></div>
      <div
        style={theme === "light" ? {} : { right: "-25%", top: "-25%" }}
        className="theme-toggle-after"
      ></div>
    </div>
  );
};
