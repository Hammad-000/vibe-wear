import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Pehle check karega ke localStorage mein koi theme saved hai ya nahi, default 'dark' rakhega
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Agar light theme hai toh HTML element se dark class hatao, warna lagao
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    
    // Local storage mein save taake page refresh par choice delete na ho
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook taake kisi bhi page par isay aram se use kar sakein
export const useTheme = () => useContext(ThemeContext);