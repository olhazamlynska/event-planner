import { createContext, useState } from 'react';

export const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('UA');
  const toggleLanguage = language => {
    setLang(prevLang => (prevLang === language ? prevLang : language));
  };
  return (
    <LangContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
export default LangProvider;
