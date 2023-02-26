import styled from 'styled-components';
import { between, down, up } from 'styled-breakpoints';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${between('tablet', 'pcSizeS')} {
    margin-right: 20px;
  }
  ${down('tablet')} {
    margin-top: 92px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;

  padding: 10px 28px;
  gap: 10px;

  color: ${({ theme }) => theme.colors.mainBlack};
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  background: ${({ theme }) => theme.colors.mainWhite};
  border: 2px solid #f59256;
  border-radius: 40px;

  transition: ${({ theme }) => theme.btnAnimationTransition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
    scale: ${({ theme }) => theme.btnHoverFocusScale};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
    scale: 1;
  }

  &:last-child {
    margin-left: 10px;
  }
  ${up('tablet')} {
    font-size: 16px;
  }

  ${up('pcSizeS')} {
    font-size: 20px;
  }
`;
