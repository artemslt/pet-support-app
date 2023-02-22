import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Title = styled.h1`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts[1]};
  text-align: center;
  margin-top: 42px;
  margin-bottom: 28px;
  ${up('tablet')} {
    font-size: 48px;
    margin-top: 90px;
    margin-bottom: 40px;
  }
  ${up('pc')} {
    margin-top: 60px;
    margin-bottom: 40px;
  }
`;
