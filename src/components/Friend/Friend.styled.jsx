import styled from 'styled-components';
import { theme } from '../../theme';
const { space, fonts, fontSizes, fontWeights, colors } = theme;

export const Card = styled.li`
position: relative;
font-family: ${fonts[1]};
  display: flex;
  background-color: ${colors.mainWhite};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  padding: ${space[3]}px 0;
  flex-direction: column;

  @media (max-width: 320px) {
    border-radius: 20px;
  }
`;

export const CardTitle = styled.a`
  font-weight: ${fontWeights[2]};
  text-decoration-line: underline;
  color: ${colors.mainAccent};
  text-align: center;
  max-width: 130px;
  margin-right: auto;
  margin-left: auto;

  margin-bottom: ${fontSizes[1]}px;
  font-size: ${fontSizes[0]}px;
  line-height: 16px;


  @media (min-width: 320px) {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[2]}px;
    line-height: 22px;
    max-width: 250px;
  }

  @media (min-width: 1280px) {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[4]}px;
    line-height: 27px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  @media (min-width: 1280px) {
    justify-content: space-evenly;
  }
`;

export const CardPhoto = styled.div`
  @media (max-width: 319px) {
    width: 82px;
    height: 75px;
  }

  @media (min-width: 320px) {
    width: 120px;
    height: 85px;
  }

  @media (min-width: 1280px) {
    width: 158px;
    height: 112px;
  }
`;

export const CardData = styled.div`
  margin-right: 5%;
  font-weight: 500;
  max-width: 200px;
  color: #000000;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 319px) {
    font-size: 12px;
    line-height: 16px;
    max-width: 140px;
  }

  @media (min-width: 320px) {
    font-size: 14px;
    line-height: 19px;
    justify-content:space-between;

  }

  @media (min-width: 1280px) {
    font-size: 16px;
    line-height: 22px;
    margin-left: 16px;
  }
`;

export const CardDataItem = styled.li`
  display: flex;
  flex-direction: column;
  @media (max-width: 319px) {
    margin-bottom: 4px;
  }
  @media (min-width: 320px) {
    margin-bottom: 8px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 12px;
  }
  li:last-child {
    margin-bottom: 0px;
  }

  a {
    text-decoration: underline;
    color: #000000;
  }
`;

export const CardText = styled.span`
  font-weight: 500;
  color: #000000;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 319px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media (min-width: 320px) {
    font-size: 14px;
    line-height: 19px;
  }

  @media (min-width: 1280px) {
    max-width: 198px;
  }
`;

export const CardWorkDays = styled.div`
position: absolute;
  top: 30%;
  left: 70%;
  transform: translate(-50%, 0);
  z-index: 1;
  background: #FFFFFF;
border: 1px solid #F59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;
padding:12px;
min-width: 170px;
text-align:center;
`;

export const CardTime = styled.span `
cursor: pointer;
`
