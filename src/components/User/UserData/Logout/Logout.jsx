import { LogoutWrapper, Button, Text } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { logout } from 'redux/auth/authOperations';
import LogoutIcon from './logout.svg';
import { useTranslation } from 'react-i18next';

export const Logout = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    googleLogout();
    dispatch(logout());
  };
  return (
    <LogoutWrapper>
      <Button
        onClick={logoutHandler}
        style={{ border: 'none', background: 'transparent', display: 'flex' }}
      >
        <img src={LogoutIcon} alt="" width={18} height={18} />
        <Text>{t('Log_out')}</Text>
      </Button>
    </LogoutWrapper>
  );
};
