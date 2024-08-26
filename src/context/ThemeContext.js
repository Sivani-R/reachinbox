import React, { createContext, useState, useContext } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

// Provide a way to access and modify theme state
export const useTheme = () => useContext(ThemeContext);

// ThemeContext provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
