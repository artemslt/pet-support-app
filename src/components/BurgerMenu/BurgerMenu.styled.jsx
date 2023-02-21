import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  z-index: 5;

  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100vw;
  padding: 16px 20px;
  position: absolute;
  top: 0;
  left: 0;

  ${up('tablet')} {
    padding: 24px 32px;
  }
`;

export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
