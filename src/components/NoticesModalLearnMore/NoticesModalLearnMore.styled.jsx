// import Select from 'react-select';
import styled, { createGlobalStyle } from 'styled-components';
import { up } from 'styled-breakpoints';
import { ReactComponent as Closes } from '../../images/ButtonCloses.svg';
import { ReactComponent as Favorite } from '../NoticeCategoryItem/akar-icons_heart.svg';

export const GlobalStyle = createGlobalStyle`
button, ul {
  padding: 0;
  margin: 0
};
`;

export const Wrapper = styled.div`
  position: relative;
  object-fit: cover;
  border-radius: 20px;
  background-color: #ffffff;
  width: 280px;
  padding: 60px 20px 40px;
  ${up('tablet')} {
    padding: 32px 20px;
    width: 704px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.mainBlack};
  text-align: center;
  margin-bottom: 20px;

  ${up('tablet')} {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 20px;
  }
`;

export const ClosesIcon = styled(Closes)`
  width: 15px;
  height: 15px;
`;

export const ButtonCloses = styled.button`
  position: absolute;
  // overflow: visible;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  right: 20px;
  top: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  &:hover {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: ${({ theme }) => theme.colors.mainAccent};
  }

  &:hover ${ClosesIcon} {
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    fill: ${({ theme }) => theme.colors.mainWhite};
  }

  ${up('tablet')} {
    right: 24px;
    top: 24px;
    width: 44px;
    height: 44px;
  }
`;


export const ModalContainer = styled.div`
  ${up('tablet')} {
    display: flex;
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
// position: relative;
// width: 240px;
// height: 240px;
  ${up('tablet')} {
    margin-right: 20px;
  }
`;

export const TableContainer = styled.div``;
export const PetImage = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  object-fit: cover;
  ${up('tablet')} {
    width: 288px;
    height: 328px;
  }
`;

export const Badge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 158px;
  height: 28px;
  left: 20;
  top: 80px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  @media screen and (min-width: 768px) {
    top: 50px;
  }
`;

export const PetCategory = styled.p`
  color: ${({ theme }) => theme.colors.mainBlack};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  letter-spacing: 0.04em;
  ${up('pc')} {
    font-family: ${({ theme }) => theme.fonts[1]};
  }
`;

export const PetTitle = styled.b`
  display: flex;
  text-align: left;
  margin-top: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.mainBlack};
  ${up('tablet')} {
    margin-top: 0;
  }
`;

export const Table = styled.table`
  margin-top: 15px;
  table-layout: fixed;
  ${up('tablet')} {
    margin-top: 20px;
  }
`;

export const TableData = styled.td`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  padding-right: 40px;
  padding-bottom: 8px;
  text-align: start;
  color: #000000;
  ${up('tablet')} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const TableValue = styled.td`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  padding-bottom: 8px;

  display: flex;
  align-items: center;

  color: #000000;
  text-align: start;
  ${up('tablet')} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ValueHover = styled.p`
  &:hover,
  &:focus {
    color: #f59256;
  }
`;

export const CommentBold = styled.span`
  font-weight: 600;
`;

export const Comment = styled.p`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  margin-top: 20px;
  color: #000000;
  text-align: start;

  ${up('tablet')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BlockBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  ${up('tablet')} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    margin-top: 32px;
    padding-right: 20px;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 8px;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.mainWhite};
  width: 100%;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #f59256;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  ${up('tablet')} {
    width: 160px;
    height: 44px;
    width: 160px;
    &:first-child {
      margin-left: 12px;
    }
    &:not(:last-child) {
      margin-bottom: 0;
    }

    font-size: ${({ theme }) => theme.fontSizes[4]}px;
  }
`;

export const FavoriteIcon = styled(Favorite)`
  margin-left: 5px;
  width: 16px;
  height: 16px;
`;
