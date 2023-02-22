import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 5;
  /* height: 100%; */

  height: ${({ open }) => (open ? '100%' : '0px')};
  transition-delay: ${({ open }) => (open ? '0' : '0.5s')};
  transition: 0.5s;
  /* transition-delay: 0.5s; */
  overflow: hidden;

  background: ${({ theme }) => theme.colors.background};
  /* height: 100vh; */
  width: 100vw;
  padding: ${({ open }) => (open ? '16px 20px' : '0')};
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */

  ${up('tablet')} {
    padding: ${({ open }) => (open ? '24px 32px' : '0')};
  }
`;

export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
