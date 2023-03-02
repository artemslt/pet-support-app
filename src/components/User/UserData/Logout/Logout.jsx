import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { logout } from 'redux/auth/authOperations';
import { useTranslation } from 'react-i18next';
import { ModalMenu } from 'components/Modal/Modal';
import {
  LogoutWrapper,
  Button,
  Text,
  ModalToggleBtn,
  ModalMenuInner,
  ModalLogoutText,
  ModalToggleBtnWrapp,
  SvgWrapp,
  IconLogout,
} from './Logout.styled';

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
          type="button"
          onClick={() => setModalOpen(true)}
          style={{ border: 'none', background: 'transparent', display: 'flex' }}
        >
          <SvgWrapp>
            <IconLogout />
            <Text>{t('Log_out')}</Text>
          </SvgWrapp>
        </Button>
      </LogoutWrapper>
      <ModalMenu onClose={() => setModalOpen(false)} open={modalOpen}>
        <ModalMenuInner>
          <ModalLogoutText>{t('logout_info_text')}</ModalLogoutText>
          <ModalToggleBtnWrapp>
            <ModalToggleBtn type="submit" onClick={logoutHandler}>
              {t('Yes')}
            </ModalToggleBtn>
            <ModalToggleBtn type="button" onClick={() => setModalOpen(false)}>
              {t('No')}
            </ModalToggleBtn>
          </ModalToggleBtnWrapp>
        </ModalMenuInner>
      </ModalMenu>
    </>
  );
};
