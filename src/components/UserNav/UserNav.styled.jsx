import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { down, up, between } from 'styled-breakpoints';

export const UserNavContainer = styled.div`
  ${between('tablet', 'pcSizeS')} {
    margin-left: auto;
    margin-right: 20px;
  }
  ${down('tablet')} {
    margin-top: 46px;
  }
`;

export const LinkFull = styled(NavLink)`
  text-decoration: none;

  display: inline-flex;
  align-items: center;

  /* margin-left: 10px; */
  padding: 10px 28px;
  gap: 10px;

  color: ${({ theme }) => theme.colors.mainWhite};
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  background: ${({ theme }) => theme.colors.mainAccent};
  border: 2px solid ${({ theme }) => theme.colors.mainAccent};
  border-radius: 40px;

  ${up('mobile')} {
    font-size: 14px;
    line-height: 1.357;
  }

  ${up('mobileSizeM')} {
    font-size: 14px;
    line-height: 1.357;
  }
  ${up('tablet')} {
    font-size: 16px;
    line-height: 1.375;
  }
`;
