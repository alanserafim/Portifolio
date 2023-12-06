import { useEffect } from "react";
import { createContext, useContext, useState } from "react";


export const ConfigContext = createContext('');
ConfigContext.displayName = "config"

export const ConfigProvider = ({ children }) => {

    const initialLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : 'pt'
    const initialTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'

    const [language, setLanguage] = useState(initialLanguage)
    const [theme, setTheme] = useState(initialTheme)

    return (
        <ConfigContext.Provider
            value={{
                language,
                setLanguage,
                theme,
                setTheme
            }}
        >
            {children}
        </ConfigContext.Provider>
    )

}

export const useConfigContext = () => {
    const {
        language,
        setLanguage,
        theme,
        setTheme
    } = useContext(ConfigContext);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        localStorage.setItem('language', language);

    }, [theme, language])   

    return {
        language,
        setLanguage,
        theme,
        setTheme
    }

}