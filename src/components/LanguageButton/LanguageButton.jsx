import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from './LanguageButton.styled';

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    () => localStorage.getItem('language') || 'ua'
  );

  const handleLanguageToggle = () => {
    const newLanguage = language === 'ua' ? 'en' : 'ua';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    if (localStorage.getItem('language')) {
      i18n.changeLanguage(localStorage.getItem('language'));
    }
  }, [i18n]);

  return (
    <Switch>
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={language === 'en'}
        onChange={handleLanguageToggle}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">UA</span>
      <span className="off">EN</span>
    </Switch>
  );
};
