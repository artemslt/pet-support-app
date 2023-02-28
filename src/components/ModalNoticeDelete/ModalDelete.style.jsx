import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Wrapper = styled.div`
  padding: 20px 20px;
  ${up('tablet')} {
    padding: 35px 30px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 24px;
  line-height: calc(33 / 24);
  color: ${({ theme }) => theme.colors.mainBlack};
  text-align: center;
  margin-bottom: 28px;

  ${up('tablet')} {
    font-size: 36px;
    line-height: calc(49 / 36);
    margin-bottom: 40px;
  }
`;

export const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${up('tablet')} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainWhite};
  width: 140px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #f59256;

  margin-bottom: 15px;

  :last-child {
    margin-bottom: 0;
  }

  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  ${up('tablet')} {
    margin-right: 15px;
    :last-child {
      margin-right: 0;
    }
    margin-bottom: 0;
  }
`;
