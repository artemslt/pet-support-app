import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { up } from 'styled-breakpoints';
import { ReactComponent as ChatOpenIcon } from '../../images/chat-open.svg';
import { ReactComponent as ChatCloseIcon } from '../../images/chat-close.svg';


export const StyledChatOpenIcon = styled(ChatOpenIcon)`
fill: ${prop => prop.theme.colors.mainAccent};
stroke: ${prop => prop.theme.colors.mainWhite};
transition: ${({ theme }) => theme.btnAnimationTransition};
&:hover,
&:focus {
  scale: ${prop => prop.theme.btnHoverFocusScale};
}
`

export const StyledChatCloseIcon = styled(ChatCloseIcon)`
fill: ${prop => prop.theme.colors.mainAccent};
stroke: ${prop => prop.theme.colors.mainWhite};
transition: ${({ theme }) => theme.btnAnimationTransition};
&:hover,
&:focus {
  scale: ${prop => prop.theme.btnHoverFocusScale};
}
`

export const WrapperSharedLayout = styled.div`
  /* background-color: ${({ theme }) => theme.colors.background};
  height: 100vh; */
`;

export const StyledContainer = styled(ToastContainer)`
  .Toastify__toast--success {
    border-radius: 40px;
    border: 2px solid #55ae3a;
  }
  .Toastify__toast--error {
    border-radius: 40px;
    border: 2px solid ${prop => prop.theme.colors.mainAccent};
  }
  .Toastify__close-button {
    margin-top: 10px;
    margin-right: 10px;
  }
`;

export const IconButton = styled.button`
  position: fixed;
  z-index: 1;
  right: 0px;
  bottom: 0px;
  display: block;
  cursor: pointer;
  border: none;
  width: 120px;
  height: 120px;
  padding: 0;
  background-color: transparent;

  ${up('tablet')} {
    right: 6px;
    bottom: 6px;
  }
`;