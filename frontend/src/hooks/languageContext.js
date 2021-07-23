import React, { useState, useEffect, useContext, createContext } from 'react';
import english from '../utils/english.json';
import spanish from '../utils/spanish.json';

export const LanguageContext = createContext();

export const LanguageContextProvider = (props) => {
    const [languageCtx, setLanguageCtx] = useState(english);

    const changeLanguage = (lang) => {
        switch (lang) {
            case 'ES':
                setLanguageCtx(spanish);
                break;
            default:
                setLanguageCtx(english);
                break;
        }
    };

    const value = {
        languageCtx,
        changeLanguage
    };

    return <LanguageContext.Provider {...props} value={value} />;
};

export const useContextInfo = () => useContext(LanguageContext);
