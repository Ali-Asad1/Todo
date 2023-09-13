import { ReactNode, createContext, useContext, useState } from "react";

export interface ThemeType {
  theme: string;
  toggleTheme: VoidFunction;
}

export const ThemeContext = createContext<ThemeType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const localTheme = localStorage.getItem("theme");
  const HTML = document.querySelector("html")!;

  const [theme, setTheme] = useState(() => {
    if (localTheme) {
      return localTheme;
    } else {
      if (prefersDark) {
        return "dark";
      } else {
        return "light";
      }
    }
  });

  const changeDocumentTheme = (theme: string) => {
    HTML.style.colorScheme = theme;
    HTML.className = theme;
  };

  const toggleTheme = () => {
    if (theme === "light") {
      changeDocumentTheme("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      changeDocumentTheme("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  changeDocumentTheme(theme);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeType => {
  return useContext(ThemeContext) as ThemeType;
};
