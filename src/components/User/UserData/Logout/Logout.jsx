import { LogoutWrapper, Button, Text } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import LogoutIcon from './logout.svg';

export const Logout = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <LogoutWrapper>
      <Button
        onClick={logoutHandler}
        style={{ border: 'none', background: 'transparent', display: 'flex' }}
      >
        <img src={LogoutIcon} alt="" width={18} height={18} />
        <Text>Log out</Text>
      </Button>
    </LogoutWrapper>
  );
};
