import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const AddButton = styled.button`
  display: flex;

  align-items: center;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  color: ${({ theme }) => theme.colors.mainBlack};
  border: none;
  margin-left: auto;
  position: absolute;
  right: 0;
  bottom: -100px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  ${up('tablet')} {
    position: static;
    /* max-width: 200px; */
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-left: 12px;
  background-color: ${({ theme }) => theme.colors.mainAccent};
  ${up('tablet')} {
    margin-left: 0;
  }
`;
