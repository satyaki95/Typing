import {  createContext, useContext, useState } from "react";
import { themeOptions } from "../Styles/Theme";




const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {
    const defaultTheme = themeOptions[0].value;
    const [theme, setTheme] = useState(defaultTheme);

    const values = {
        theme,
        setTheme
    };

    return (<ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>)
}

export const useTheme = () => useContext(ThemeContext);
