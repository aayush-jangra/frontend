import { useEffect, useState } from "react";
import { THEME_KEY } from "../constants/storage";

export const useTheme = () => {
  const defaultTheme = localStorage.getItem(THEME_KEY) ?? "light";
  const [theme, setTheme] = useState(defaultTheme);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      // Dark theme
      document.documentElement.style.setProperty("--primary-color", "#002621");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#079CA3"
      );
      document.documentElement.style.setProperty(
        "--alternate-primary-color",
        "#800202"
      );
      document.documentElement.style.setProperty(
        "--alternate-secondary-color",
        "#EF654B"
      );
      document.documentElement.style.setProperty("--canvas-color", "#00504A");
      document.documentElement.style.setProperty("--text-primary", "white");
      document.documentElement.style.setProperty("--text-secondary", "#b1b1b1");
      document.documentElement.style.setProperty(
        "--text-subtitle",
        "lightGray"
      );
      document.documentElement.style.setProperty("--text-inverse", "black");
      document.documentElement.style.setProperty(
        "--background-primary",
        "black"
      );
      document.documentElement.style.setProperty(
        "--background-secondary",
        "white"
      );
      document.documentElement.style.setProperty("--shadow-primary", "white");
      document.documentElement.style.setProperty("--shadow-secondary", "black");
      document.documentElement.style.setProperty("--border-primary", "white");
      document.documentElement.style.setProperty("--border-secondary", "black");
    } else {
      // Light theme
      document.documentElement.style.setProperty("--primary-color", "#089ca3");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#00504a"
      );
      document.documentElement.style.setProperty(
        "--alternate-primary-color",
        "#EF654B"
      );
      document.documentElement.style.setProperty(
        "--alternate-secondary-color",
        "#800202"
      );
      document.documentElement.style.setProperty("--canvas-color", "#f2fbff");
      document.documentElement.style.setProperty("--text-primary", "black");
      document.documentElement.style.setProperty("--text-secondary", "gray");
      document.documentElement.style.setProperty(
        "--text-subtitle",
        "lightGray"
      );
      document.documentElement.style.setProperty("--text-inverse", "white");
      document.documentElement.style.setProperty(
        "--background-primary",
        "white"
      );
      document.documentElement.style.setProperty(
        "--background-secondary",
        "black"
      );
      document.documentElement.style.setProperty("--shadow-primary", "black");
      document.documentElement.style.setProperty("--shadow-secondary", "white");
      document.documentElement.style.setProperty("--border-primary", "black");
      document.documentElement.style.setProperty("--border-secondary", "white");
    }
  }, [theme]);

  return { theme, switchTheme };
};
