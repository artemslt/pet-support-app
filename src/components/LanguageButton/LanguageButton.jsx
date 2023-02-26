import {
    Switch,
  } from './LanguageButton.styled';

export const LanguageButton = () => {
    return (
        <Switch>
	    <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox"/>
	    <label htmlFor="language-toggle"></label>
	    <span className="on">UA</span>
	    <span className="off">EN</span>
  	</Switch>
    );
  };
  