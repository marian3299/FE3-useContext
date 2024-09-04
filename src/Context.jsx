import { createContext, useContext, useState } from "react";

const ThemeState = createContext();

const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};

const Context = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const handleThemeChange = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  };

  return (
    <ThemeState.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeState.Provider>
  );
};

export default Context;

export const useThemeStates = () => useContext(ThemeState);
