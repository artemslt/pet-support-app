// import { NavLink } from 'react-router-dom';
import { LogoStyled, LogoAccent, LogoContainer, LogoLink } from './logo.styled';

export const Logo = ({ setOpen }) => {
  return (
    <LogoLink to="/" onClick={() => setOpen(false)}>
      <LogoContainer>
        <LogoStyled>
          pe
          <LogoAccent>t</LogoAccent>
          ly
        </LogoStyled>
      </LogoContainer>
    </LogoLink>
  );
};
