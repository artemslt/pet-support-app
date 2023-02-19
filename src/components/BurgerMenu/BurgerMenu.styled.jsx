import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* z-index: 5; */

  background: ${({ theme }) => theme.colors.background};
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  height: 100vh;
  width: 100vw;
  padding: 16px 20px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  ${up('tablet')} {
    padding: 24px 32px;
  }

  ${up('pcSizeS')} {
    display: none;
  }
`;
