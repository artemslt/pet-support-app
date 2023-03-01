import styled, { createGlobalStyle } from 'styled-components';
import { up } from 'styled-breakpoints';
export const GlobalStyle = createGlobalStyle`
ul, button {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
label {
  border: 1px solid transparent;
}
input {
  border: 1px solid transparent;
}

input:hover, input:focus {
  outline: none;
 }
`;

export const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 42px;
  background-color: #fdf7f2;

  ${up('tablet')} {
    padding-top: 90px;
  }
  ${up('pc')} {
    padding-top: 60px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;
  margin-bottom: 28px;
  ${up('tablet')} {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  } ;
`;
export const Label = styled.label`
  position: relative;
  display: inline-flex;
  text-align: center;
  margin-bottom: 40px;
  ${up('tablet')} {
    margin-bottom: 60px;
  }
`;
export const Input = styled.input`
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

export const SearchNewsButton = styled.div`
  position: absolute;
  padding: 0;
  right: 12px;
  top: 10px;
  border: transparent;
  background: transparent;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ErrorText = styled.b`
  margin-top: 40px;
  ${up('tablet')} {
    margin-top: 80px;
  }
`;
