import styled from 'styled-components';

export const Spinner = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  margin-bottom: 100px;
  border: 16px solid peachpuff;
  border-top: 16px orange solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
