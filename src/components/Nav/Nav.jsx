import { Link, NavContainer } from './Nav.styled';

export const Nav = ({ setOpen }) => {
  return (
    <NavContainer>
      <Link to="/news" onClick={() => setOpen(false)}>
        News
      </Link>

      <Link to="/notices" onClick={() => setOpen(false)}>
        Find pet
      </Link>

      <Link to="/friends" onClick={() => setOpen(false)}>
        Our friends
      </Link>
    </NavContainer>
  );
};
