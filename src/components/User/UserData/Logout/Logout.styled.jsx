import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { MdLogout } from 'react-icons/md';
// import { ReactComponent as Logout } from 'images/userPage/Logout.svg';

export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: start;
  font-size: 16px;
  margin-top: 15px;
  ${up('tablet')} {
    justify-content: start;
  }
`;
export const IconLogout = styled(MdLogout)`
  width: 18px;
  height: 18px;
  fill: ${props => props.theme.colors.mainAccent};

  /* &:hover {
    fill: ${prop => prop.theme.colors.activeAccent};
  } */
`;

export const Button = styled.button`
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  fill: red;

  ${up('tablet')} {
    position: absolute;
    flex-direction: row;
    bottom: 24px;
    left: 32px;
    &:hover {
      transition: ease-in-out 0.05s;
      scale: ${prop => prop.theme.btnHoverFocusScale};
    }
    /* &:hover ${MdLogout} {
      fill: ${prop => prop.theme.colors.activeAccent};
    } */
  }
  ${up('pc')} {
    position: unset;
  }
`;

export const SvgWrapp = styled.div`
  width: 18px;
  height: 18px;
  justify-content: flex-start;
  fill: red;
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

export const ModalToggleBtnWrapp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${up('tablet')} {
    display: block;
  }
`;

export const ModalToggleBtn = styled.button`
  background-color: rgba(245, 146, 86, 0.9);
  color: ${({ theme }) => theme.colors.mainWhite};
  width: 240px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #f59256;
  &:first-child {
    margin-bottom: 12px;
  }

  ${up('tablet')} {
    width: 180px;
    height: 44px;
    margin-bottom: 0px;
    &:first-child {
      margin-right: 16px;
      margin-bottom: 0;
    }
  }
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.mainAccent};
  }
  &.active {
    background: ${({ theme }) => theme.colors.mainAccent};

    &:hover {
      background: ${({ theme }) => theme.colors.mainWhite};
    }
  }
`;

export const ModalMenuInner = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ModalLogoutText = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 20px;
  text-align: center;
  ${up('tablet')} {
    font-size: 18px;
  }
`;
