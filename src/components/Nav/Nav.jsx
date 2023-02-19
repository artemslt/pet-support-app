import { useMatchMedia } from 'hooks/use-match-media';
import { Link, NavContainer } from './Nav.styled';

export const Nav = () => {
  const { isDesktop } = useMatchMedia();
  return (
    <NavContainer>
      <Link to="/news">News</Link>

      <Link to="/notices">Find pet</Link>

      <Link to="/friends">Our friends</Link>
    </NavContainer>
  );
};
