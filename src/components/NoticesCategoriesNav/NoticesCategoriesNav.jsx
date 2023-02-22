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

export const NoticesCategoriesNav = () => {
  const mob = useBreakpoint(only('mobile'));
  const tablet = useBreakpoint(up('tablet'));

  let isLoggin = useSelector(selectIsLoggedIn);

  return (
    <CategoriesNav>
      <LinkWrapper>
        <StyledLink to="sell">sell</StyledLink>
        <StyledLink to="lost-found">lost/found</StyledLink>
        <StyledLink to="for-free">in good hands</StyledLink>
        {isLoggin ? (
          <>
            <StyledLink to="for-free">favorite ads</StyledLink>
            <StyledLink to="for-free">my ads</StyledLink>
          </>
        ) : null}
      </LinkWrapper>

      {mob && <MobAddBtn />}
      {tablet && <AddNoticeButton />}
    </CategoriesNav>
  );
};
