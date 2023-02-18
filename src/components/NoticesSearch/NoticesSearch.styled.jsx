import styled from 'styled-components';

export const Search = styled.input`
  height: 44px;
  width: 608px;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  color: ${({ theme }) => theme.colors.inputText};
  outline: transparent;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  margin-bottom: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: none;
  border-radius: 40px;
  /* ::placeholder {
    font-size: ${prop => prop.theme.fontSizes[3]}px;
    font-family: ${prop => prop.theme.fonts[1]};
    font-weight: ${prop => prop.theme.fontWeights[1]};
    color: ${prop => prop.theme.colors.inputText};
    letter-spacing: 0.04em;
  } */
`;
