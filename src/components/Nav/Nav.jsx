import { Link, NavContainer } from './Nav.styled';

export const Nav = () => {
  return (
    <NavContainer>
      <Link to="/news">News</Link>

      <Link to="/notices">Find pet</Link>

      <Link to="/friends">Our friends</Link>
    </NavContainer>
  );
};
