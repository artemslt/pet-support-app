import styled from 'styled-components';
import { theme } from '../../theme';
const { space, fontSizes, fontWeights, colors } = theme;

export const PartnerTitle = styled.h1`
  font-weight: ${fontWeights[2]};
  text-align: center;
  color: ${colors.additionalBlack};
  font-size: ${fontSizes[6]}px;
  line-height: ${space[5]}px;

  @media (max-width: ${theme.mobile}) {
    font-size: ${fontSizes[1]}px;
    line-height: ${space[2]}px;
    margin: ${space[5]}px 0 ${space[4]}px;
  }

  @media (min-width: ${theme.mobileSizeM}) {
    margin: ${space[4]}px 0 ${space[2]}px;
  }

  @media (min-width: ${theme.pc}) {
    margin: ${space[3]}px 0;
  }
`;

export const CardList = styled.ul`
  display: grid;
  margin: 0 auto;

  @media screen and (min-width: ${theme.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 280px;
    gap: ${space[1]}px;
  }

  @media screen and (min-width: ${theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: ${theme.tabletM};
  }

  @media screen and (min-width: ${theme.pc}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${space[4]}px;
    max-width: ${theme.pcSizeL};
  }
`;

export const Card = styled.li`
  display: flex;
  background-color: ${colors.mainWhite};
  box-shadow: ${space[2]}px ${space[1]}px ${space[4]}px rgba(49, 21, 4, 0.07);
  border-radius: ${space[5]}px;
  padding: ${space[3]}px 0;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-weight: ${fontWeights[1]};
  text-decoration-line: underline;
  color: ${colors.mainAccent};
  text-align: center;
  margin-bottom: ${space[3]}px;

  @media (max-width: ${theme.mobile}) {
    margin-bottom: ${space[1]}px;
    font-size: ${fontSizes[0]}px;
    line-height: ${space[1]}px;
  }

  @media (min-width: ${theme.mobile}) {
    font-size: ${fontSizes[2]}px;
    line-height: ${space[3]}px;
  }

  @media (min-width: ${theme.pc}) {
    margin-bottom: ${space[3]}px;
    font-size: ${fontSizes[4]}px;
    line-height: ${space[4]}px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${theme.mobile}) {
    flex-direction: row;
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
  font-weight: 500;
  max-width: 206px;
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
