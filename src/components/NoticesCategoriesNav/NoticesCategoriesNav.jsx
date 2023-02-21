import { AddNoticeButton } from 'components/AddNoticeButton/AddNoticeButton';
import { CategoriesNav, StyledLink } from './NoticesCategoriesNav.styled';
import { useBreakpoint } from 'styled-breakpoints/react-styled';
import { up, only } from 'styled-breakpoints';
import { MobAddBtn } from 'components/AddNoticeButton/MobVersion';

export const NoticesCategoriesNav = () => {
  const mob = useBreakpoint(only('mobile'));
  const tablet = useBreakpoint(up('tablet'));

  let isLoggin = true;
  return (
    <CategoriesNav>
      <StyledLink to="sell">sell</StyledLink>
      <StyledLink to="lost-found">lost/found</StyledLink>
      <StyledLink to="for-free">in good hands</StyledLink>
      {isLoggin ? (
        <>
          <StyledLink to="for-free">favorite ads</StyledLink>
          <StyledLink to="for-free">my ads</StyledLink>
        </>
      ) : null}
      {mob && <MobAddBtn />}
      {tablet && <AddNoticeButton />}
    </CategoriesNav>
  );
};
