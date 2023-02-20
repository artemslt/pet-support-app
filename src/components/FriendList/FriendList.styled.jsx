import styled from 'styled-components';

export const PartnerTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  color: #000000;
  font-size: 48px;
  line-height: 66px;

  @media (max-width: 319px) {
    font-size: 24px;
    line-height: 33px;
    margin: 40px 0 30px;
  }

  @media (min-width: 320px) {
    margin: 90px 0 40px;
  }

  @media (min-width: 1280px) {
    margin: 60px 0;
  }
`;

export const CardList = styled.ul`
  display: grid;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 280px;
    gap: 12px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: 1280px;
  }
`;

