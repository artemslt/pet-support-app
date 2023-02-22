import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { up } from 'styled-breakpoints';

export const CategoriesNav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-bottom: 60px;
  ${up('pc')} {
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const StyledLink = styled(NavLink)`
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
  margin-right: 12px;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.colors.mainWhite};
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }
`;
