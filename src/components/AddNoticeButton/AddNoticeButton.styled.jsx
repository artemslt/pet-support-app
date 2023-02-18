import styled from 'styled-components';

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  color: ${({ theme }) => theme.colors.mainBlack};
  border: none;
  margin-left: auto;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-left: 12px;
  background-color: ${({ theme }) => theme.colors.mainAccent};
`;
