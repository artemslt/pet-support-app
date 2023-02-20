// import { useMatchMedia } from 'hooks/use-match-media';
import { Link, NavContainer } from './Nav.styled';

export const Nav = onClick => {
  // const { isDesktop } = useMatchMedia();
  return (
    <NavContainer>
      <div onClick={onClick}>
        <Link to="/news">News</Link>
      </div>

      <Link to="/notices" onClick={onClick}>
        Find pet
      </Link>

      <Link to="/friends">Our friends</Link>
    </NavContainer>
  );
};
