import styled from 'styled-components';
import { up, down } from 'styled-breakpoints';

export const LogoContainer = styled.div`
  ${down('pcSizeS')} {
    /* width: 100%; */
    /* text-align: left; */
  }
`;

export const LogoStyled = styled.p`
  color: ${({ theme }) => theme.colors.mainBlack};
  font-family: ${({ theme }) => theme.fonts[2]};
  font-weight: 700;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  text-align: left;

  ${up('tablet')} {
    font-size: 32px;
  }
`;

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.mainAccent};
`;
