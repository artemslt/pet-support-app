import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'hooks';
import { useMatchMedia } from 'hooks/use-match-media';
import { StyledMenu, StyledNav } from './BurgerMenu.styled';

export const Menu = ({ setOpen, open }) => {
  const { isMobile } = useMatchMedia();
  const { isLoggedIn } = useAuth();

  return (
    <StyledMenu open={open}>
      {/* <Logo setOpen={setOpen} /> */}
      <StyledNav>
        {isMobile && isLoggedIn && <UserNav setOpen={setOpen} />}
        {isMobile && !isLoggedIn && <AuthNav setOpen={setOpen} />}
        <Nav setOpen={setOpen} />
      </StyledNav>
    </StyledMenu>
  );
};
