import {
    Switch,
  } from './LanguageButton.styled';

export const LanguageButton = () => {
    return (
        <Switch>
	    <input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox"/>
	    <label for="language-toggle"></label>
	    <span class="on">UA</span>
	    <span class="off">EN</span>
  	</Switch>
    );
  };
  