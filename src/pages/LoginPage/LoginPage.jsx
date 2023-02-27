import { LoginForm } from 'components/LoginForm/LoginForm';
import { BackgroundWrapper } from './AuthPage.styled';

const LoginPage = () => {
  return (
    <>
      <BackgroundWrapper>
        <LoginForm />
      </BackgroundWrapper>
    </>
  );
};

export default LoginPage;
