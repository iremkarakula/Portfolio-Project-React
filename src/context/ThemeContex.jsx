import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    function toggleTheme() {
        setDarkMode(pre => !pre)
    }


    return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        <div className={darkMode ? "dark" : ""}>
            {children}
        </div>
    </ThemeContext.Provider>
}