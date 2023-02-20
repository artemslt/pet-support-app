import styled from 'styled-components';
import { between, down, up } from 'styled-breakpoints';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${between('tablet', 'pcSizeS')} {
    margin-left: auto;
    margin-right: 20px;
  }
  ${down('tablet')} {
    margin-top: 46px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-left: 10px;

  padding: 10px 28px;
  gap: 10px;

  color: ${({ theme }) => theme.colors.mainBlack};
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  background: ${({ theme }) => theme.colors.mainWhite};
  border: 2px solid #f59256;
  border-radius: 40px;

  ${down('tablet')} {
    margin-left: 0;
  }

  ${up('mobile')} {
  }
  ${up('mobileSizeM')} {
  }

  ${up('pcSizeS')} {
  }
  ${up('pcSizeL')} {
  }
  ${up('pc')} {
  }
`;

export const LinkFull = styled(NavLink)`
  text-decoration: none;

  margin-left: 10px;
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

  ${up('mobileSizeM')} {
  }
  ${up('tablet')} {
  }
  ${up('pcSizeS')} {
  }
  ${up('pcSizeL')} {
  }
`;
