import { Link, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = ({ setOpen }) => {
  return (
    <AuthNavContainer>
      <Link to="/login" onClick={() => setOpen(false)}>
        Login
      </Link>
      <Link to="/register" onClick={() => setOpen(false)}>
        Registration
      </Link>
    </AuthNavContainer>
  );
};
