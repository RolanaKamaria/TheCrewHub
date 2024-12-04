import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(() => {
    // Check saved theme in local storage or default to light
    return localStorage.getItem("theme") === "dark" ? false : true;
  });

  useEffect(() => {
    // Toggle the `dark` class on the `html` element
    const root = document.documentElement;
    if (isLight) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  return (
    <ThemeContext.Provider value={{ isLight, setIsLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
