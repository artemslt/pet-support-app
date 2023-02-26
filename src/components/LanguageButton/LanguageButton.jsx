import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from './LanguageButton.styled';

export const LanguageButton = () => {
  const [language, setLanguage] = useState('ua');
  // const { i18n } = useTranslation();

  const handleLanguageToggle = () => {
    setLanguage(language === 'ua' ? 'en' : 'ua');
  };
  // useEffect(() => {
  //   language === 'ua' ? i18n.changeLanguage('en') : i18n.changeLanguage('ua');
  // }, [i18n, language]);

  return (
    <Switch>
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={language === 'ua'}
        onChange={handleLanguageToggle}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">UA</span>
      <span className="off">EN</span>
    </Switch>
  );
};
