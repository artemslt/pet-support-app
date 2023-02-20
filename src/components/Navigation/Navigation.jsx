import { AuthNav } from 'components/AuthNav/AuthNav';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'hooks';
import { useMatchMedia } from 'hooks/use-match-media';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = onClick => {
  const { isTablet, isDesktop } = useMatchMedia();

  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      {isDesktop && <Nav onClick={onClick} />}

      {(isDesktop || isTablet) && isLoggedIn && <UserNav />}
      {(isDesktop || isTablet) && !isLoggedIn && <AuthNav />}
    </NavigationStyled>
  );
};
