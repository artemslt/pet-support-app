import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: start;
  font-size: 16px;
  margin-top: 15px;
`;

export const Button = styled.div`
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
  ${up('tablet')} {
    position: absolute;
    flex-direction: row;
    bottom: 24px;
    left: 32px;
  }
  ${up('pc')} {
    position: unset;
  }
`;

export const Text = styled.span`
  display: inline-block;
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 8px;
`;
