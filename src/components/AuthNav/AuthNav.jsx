import { useTranslation } from 'react-i18next';
import { Link, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = ({ setOpen }) => {
  const { t } = useTranslation();

  return (
    <AuthNavContainer>
      <Link to="/login" onClick={() => setOpen(false)}>
        {t('Login')}
      </Link>
      <Link to="/register" onClick={() => setOpen(false)}>
        {t('Registration')}
      </Link>
    </AuthNavContainer>
  );
};
