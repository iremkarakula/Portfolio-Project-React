import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const storedMode = localStorage.getItem("darkMode") === "true";
    const [darkMode, setDarkMode] = useState(storedMode);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    function toggleTheme() {
        setDarkMode(pre => !pre)
    }


    return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        <div className={darkMode ? "dark" : ""}>
            {children}
        </div>
    </ThemeContext.Provider>
}