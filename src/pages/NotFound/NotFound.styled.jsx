import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 150px;
  }
`;

export const Image = styled.img`
  border-radius: 30px;
  width: 100%;
  height: 30%;
  max-width: 600px;
`;

export const Redirect = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: underline;
  color: #f59256;
  margin-top: 20px;
  cursor: pointer;
  padding: 10px;
`;
