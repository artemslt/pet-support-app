import { useSelector } from 'react-redux';

import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import {
  CategoriesNav,
  StyledLink,
  LinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { up, down } from 'styled-breakpoints';
import { MobAddBtn } from 'components/AddNoticeButton/MobVersion';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { useState } from 'react';
import { AddPet } from 'components/ModalAddNotice/ModalAddNotice';
import { ModalMenu } from 'components/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import i18n from 'i18n';
import { ErrorToastIcon } from 'components/ToastIcon/ToastIcon.styled';

export const NoticesCategoriesNav = () => {
  const { t } = useTranslation();
  const mob = useBreakpoint(down('tablet'));
  const tablet = useBreakpoint(up('tablet'));

  const navigate = useNavigate();
  let isLoggin = useSelector(selectIsLoggedIn);
  const [modalToggle, setModalToggle] = useState(false);
  const onToggleModal = e => {
    setModalToggle(false);
  };

  const addPet = () => {
    if (!isLoggin) {
      toast.error(i18n.t('pet_add_notice_auth'), {icon: <ErrorToastIcon />});
      navigate('/login');
      return;
    }
    setModalToggle(true);
  };

  return (
    <CategoriesNav>
      <ModalMenu onClose={() => setModalToggle(false)} open={modalToggle}>
        <AddPet onToggleModal={onToggleModal}></AddPet>
      </ModalMenu>
      <LinkWrapper>
        <StyledLink to="sell">{t('sell')}</StyledLink>
        <StyledLink to="lost-found">{t('lost_found')}</StyledLink>
        <StyledLink to="for-free">{t('in_good_hands')}</StyledLink>
        {isLoggin ? (
          <>
            <StyledLink to="favorite">{t('favorite_ads')}</StyledLink>
            <StyledLink to="own">{t('my_ads')}</StyledLink>
          </>
        ) : null}
      </LinkWrapper>

      {mob && <MobAddBtn onClick={e => addPet()} />}
      {tablet && <AddNoticeButton onClick={e => addPet()} />}
    </CategoriesNav>
  );
};
