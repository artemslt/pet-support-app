import styled, { createGlobalStyle } from 'styled-components';

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
  // background-color: #F59256;
  // padding-left: 20px;
  // padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 90px;
  } ;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  } ;
`;
export const Label = styled.label`
  position: relative;
  width: 100%;
  max-width: 608px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  padding: 9px 12px;
  color: #535353;
  :hover,
  :focus {
    border: 1px solid rgba(245, 146, 86, 0.5);
  }
`;
export const Input = styled.input`
  width: 95%;
`;

export const SearchNewsButton = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  // border-radius: 32px;
  border: none;
  // outline: none;
  background-color: transparent;
  cursor: pointer;
  // fill: black;
  // :hover {
  //   fill: orange;
  // }
`;

export const ErrorText = styled.b`
margin-top: 40px;
@media screen and (min-width: 768px) {
  80px;
}`