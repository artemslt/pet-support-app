import { up } from 'styled-breakpoints';
import styled from 'styled-components';

export const Form = styled.div`
  position: relative;
  display: inline-flex;
  text-align: center;
  margin-bottom: 28px;
  ${up('tablet')} {
    margin-bottom: 40px;
  }
`;

export const Search = styled.input`
  height: 40px;
  width: 280px;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  color: ${({ theme }) => theme.colors.inputText};
  outline: transparent;
  padding: 9px 12px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: 1px solid transparent;
  border-radius: 20px;

  :hover,
  :focus {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
  ${up('tablet')} {
    width: 608px;
    height: 44px;
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
    border-radius: 40px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  padding: 0;
  right: 12px;
  top: 10px;
  border: transparent;
  background: transparent;
  cursor: pointer;
`;

export const ErrorText = styled.b`
  margin-top: 40px;
  ${up('tablet')} {
    margin-top: 80px;
  }
`;