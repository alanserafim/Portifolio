import { createContext, useState } from "react";


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

