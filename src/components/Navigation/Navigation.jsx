import { AuthNav } from 'components/AuthNav/AuthNav';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { useAuth } from 'hooks';
import { useMatchMedia } from 'hooks/use-match-media';
import { NavigationStyled } from './Navigation.styled';
import { LanguageButton } from 'components/LanguageButton/LanguageButton';

export const Navigation = ({ setOpen }) => {
  const { isTablet, isDesktop } = useMatchMedia();
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      {isDesktop && <Nav setOpen={setOpen} />}
      <LanguageButton></LanguageButton>
      {(isDesktop || isTablet) && isLoggedIn && <UserNav setOpen={setOpen} />}
      {(isDesktop || isTablet) && !isLoggedIn && <AuthNav setOpen={setOpen} />}
    </NavigationStyled>
  );
};
