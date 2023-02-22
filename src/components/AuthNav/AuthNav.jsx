import { Link, AuthNavContainer, LinkFull } from './AuthNav.styled';

export const AuthNav = ({ setOpen }) => {
  return (
    <AuthNavContainer>
      <Link to="/login" onClick={() => setOpen(false)}>
        Login
      </Link>
      <LinkFull to="/register" onClick={() => setOpen(false)}>
        Registration
      </LinkFull>
    </AuthNavContainer>
  );
};
