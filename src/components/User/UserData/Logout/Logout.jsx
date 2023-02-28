import {
  LogoutWrapper,
  Button,
  Text,
  ModalToggleBtn,
  ModalMenuInner,
  ModalLogoutText,
  SvgWrapp,
} from './Logout.styled';
import { useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { logout } from 'redux/auth/authOperations';
import LogoutIcon from './logout.svg';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ModalMenu } from 'components/Modal/Modal';

export const Logout = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const logoutHandler = () => {
    googleLogout();
    dispatch(logout());
  };
  return (
    <>
      <LogoutWrapper>
        <Button
          onClick={() => setModalOpen(true)}
          style={{ border: 'none', background: 'transparent', display: 'flex' }}
        >
          <SvgWrapp>
            <img src={LogoutIcon} alt="" width={18} height={18} />
          </SvgWrapp>
          <Text>{t('Log_out')}</Text>
        </Button>
      </LogoutWrapper>
      <ModalMenu onClose={() => setModalOpen(false)} open={modalOpen}>
        <ModalMenuInner>
          <ModalLogoutText>{t('logout_info_text')}</ModalLogoutText>
          <div>
            <ModalToggleBtn type="submit" onClick={logoutHandler}>
              {t('Yes')}
            </ModalToggleBtn>
            <ModalToggleBtn type="button" onClick={() => setModalOpen(false)}>
              {t('No')}
            </ModalToggleBtn>
          </div>
        </ModalMenuInner>
      </ModalMenu>
    </>
  );
};
