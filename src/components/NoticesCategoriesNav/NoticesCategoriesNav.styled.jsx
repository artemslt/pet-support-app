import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { up } from 'styled-breakpoints';

export const CategoriesNav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-bottom: 16px;
  ${up('tablet')} {
    justify-content: flex-end;
    flex-direction: row;
  }

  ${up('pc')} {
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 60px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
  max-width: 490px;
  justify-content: flex-end;

  ${up('pc')} {
    max-width: 100%;
    flex-direction: row;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid #f59256;
  background: ${({ theme }) => theme.colors.mainWhite};
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: 17px;
  margin-bottom: 12px;
  margin-right: 9px;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.mainWhite};
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }
  ${up('pc')} {
    margin-bottom: 0;
  }

  transition: ${({ theme }) => theme.btnAnimationTransition};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mainWhite};
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }
`;
