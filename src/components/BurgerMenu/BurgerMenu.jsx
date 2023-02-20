import { AuthNav } from 'components/AuthNav/AuthNav';
// import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'hooks';
import { useMatchMedia } from 'hooks/use-match-media';
import { StyledMenu } from './BurgerMenu.styled';

export const Menu = ({ open, setOpen, ...props }) => {
  const { isMobile } = useMatchMedia();
  const { isLoggedIn } = useAuth();
  const isHidden = open ? true : false;

  return (
    // <Container>
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Logo />
      {isMobile && isLoggedIn && <UserNav />}
      {isMobile && !isLoggedIn && <AuthNav />}
      <Nav />
    </StyledMenu>
    // </Container>
  );
};
