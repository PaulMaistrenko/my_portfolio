import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from '../config/i18n';
import { getUserCountry } from '../utils/geoService';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem('language') || 'en';
  
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState(savedLanguage);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const fetchCountry = async () => {
      const countryCode = await getUserCountry();
      setCountry(countryCode);
    };

    fetchCountry();
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <MainContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        language,
        setLanguage,
        toggleLanguage,
        country,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
};
