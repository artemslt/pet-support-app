import styled from 'styled-components';

export const MobBtn = styled.button`
  position: fixed;
  z-index: 1;
  opacity: 0.9;
  right: 20px;
  top: 455px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: transparent;
  background-color: ${({ theme }) => theme.colors.mainAccent};
  cursor: pointer;
`;

export const BtnText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainWhite};
`;
