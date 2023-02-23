import styled from 'styled-components';
import { theme } from '../../theme';
const { space, fonts,fontSizes, fontWeights, colors,} = theme;

export const PartnerTitle = styled.h1`
font-family: ${fonts[1]};
font-weight: ${fontWeights[2]};
text-align: center;
color: ${colors.additionalBlack};

font-size: ${fontSizes[5]}px;
line-height: ${space[4]}px;
margin-bottom: 28px;

@media (min-width: 768px) {
  margin-bottom: 40px;
  font-size: ${fontSizes[9]}px;
  line-height: ${space[5]}px;
}


@media (min-width: 1280px) {
  margin-bottom: 60px;
  font-size: ${fontSizes[9]}px;
  line-height: ${space[5]}px;
}
`;

export const CardList = styled.ul`
  display: grid;
  margin: 0 auto;
  padding-left: 0;

  grid-template-columns: repeat(1, 1fr);
  max-width: 280px;
  gap: ${fontSizes[0]}px;

  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${space[4]}px;
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${space[4]}px;
    max-width: 1280px;
  }
`;

export const FriendsContainer = styled.div`
padding: 40px 0 100px;

@media screen and (min-width: 768px) {
  padding: 90px 0 100px;
  }
@media screen and (min-width: 1280px) {
    padding: 60px 0 100px;
  }
`

export const SpinnerContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`