import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import {
  CategoriesNav,
  StyledLink,
  LinkWrapper,
} from './NoticesCategoriesNav.styled';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { up, only } from 'styled-breakpoints';
import { MobAddBtn } from 'components/AddNoticeButton/MobVersion';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { useState } from 'react';
import { AddPet } from 'components/ModalAddNotice/ModalAddNotice';
import { ModalMenu } from 'components/Modal/Modal';

export const NoticesCategoriesNav = () => {
  const mob = useBreakpoint(only('mobile'));
  const tablet = useBreakpoint(up('tablet'));
  let isLoggin = useSelector(selectIsLoggedIn);

  const [modalToggle, setModalToggle] = useState(false);
  const onToggleModal = e => {
    setModalToggle(false);
  };

  return (
    <CategoriesNav>
      <ModalMenu onClose={() => setModalToggle(false)} open={modalToggle}>
        <AddPet onToggleModal={onToggleModal}></AddPet>
      </ModalMenu>
      <LinkWrapper>
        <StyledLink to="sell">sell</StyledLink>
        <StyledLink to="lost-found">lost/found</StyledLink>
        <StyledLink to="for-free">in good hands</StyledLink>
        {isLoggin ? (
          <>
            <StyledLink to="favorite">favorite ads</StyledLink>
            <StyledLink to="own">my ads</StyledLink>
          </>
        ) : null}
      </LinkWrapper>

      {mob && <MobAddBtn onClick={e => setModalToggle(true)} />}
      {tablet && <AddNoticeButton onClick={e => setModalToggle(true)} />}
    </CategoriesNav>
  );
};