import { Link, AuthNavContainer, LinkFull } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <Link to="/login">Login</Link>
      <LinkFull to="/register">Registration</LinkFull>
    </AuthNavContainer>
  );
};
