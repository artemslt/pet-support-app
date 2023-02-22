import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { HeaderStyled } from './Header.styled';
import { useState } from 'react';
import { Burger } from 'components/Burger/Burger';
import { Menu } from 'components/BurgerMenu/BurgerMenu';
import { useMatchMedia } from 'hooks/use-match-media';
import { Container } from 'components/Container/Container.styled';
// import { CSSTransition } from 'react-transition-group';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useMatchMedia();

  return (
    <Container>
      <HeaderStyled>
        <Logo setOpen={setOpen} />
        <Navigation setOpen={setOpen} />

        {!isDesktop && <Burger open={open} setOpen={setOpen} />}

        {/* <CSSTransition in={open} timeout={300} classNames="alert" unmountOnExit> */}
        <Menu setOpen={setOpen} open={open} />
        {/* </CSSTransition> */}
      </HeaderStyled>
    </Container>
  );
};
