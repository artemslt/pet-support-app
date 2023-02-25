import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { HeaderStyled } from './Header.styled';
import { useState } from 'react';
import { Burger } from 'components/Burger/Burger';
import { Menu } from 'components/BurgerMenu/BurgerMenu';
import { useMatchMedia } from 'hooks/use-match-media';
import { Container } from 'components/Container/Container.styled';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useMatchMedia();

  return (
    <Container>
      <HeaderStyled>
        <Logo setOpen={setOpen} />
        <Navigation setOpen={setOpen} />

        {!isDesktop && <Burger open={open} setOpen={setOpen} />}
        <Menu setOpen={setOpen} open={open} />
      </HeaderStyled>
    </Container>
  );
};
