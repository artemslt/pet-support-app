import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

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
