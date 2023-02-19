import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { HeaderStyled } from './Header.styled';
import { useState } from 'react';
import { Burger } from 'components/Burger/Burger';
import { Menu } from 'components/BurgerMenu/BurgerMenu';
import { useMatchMedia } from 'hooks/use-match-media';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useMatchMedia();
  const menuId = 'main-menu';

  return (
    <HeaderStyled>
      <Logo />
      <Navigation />

      {!isDesktop && (
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      )}
      {!isDesktop && <Menu open={open} setOpen={setOpen} id={menuId} />}
    </HeaderStyled>
  );
};
