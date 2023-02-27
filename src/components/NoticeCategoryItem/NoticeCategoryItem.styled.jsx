import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Card = styled.li`
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 40px 40px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  width: 280px;

  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
  margin-left: auto;
  margin-right: auto;
  ${up('tablet')} {
    width: 336px;
    margin: 0;
  }
  ${up('pcSizeS')} {
    width: calc(100% / 3 - 22px);
    margin: 0;
  }

  ${up('pcSizeM')} {
    width: calc(100% / 3 - 32px);
    margin: 0;
  }

  ${up('pc')} {
    width: 288px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const Badge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 158px;
  height: 28px;
  left: 0;
  top: 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const CategoryTitle = styled.p`
  color: ${({ theme }) => theme.colors.mainBlack};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  letter-spacing: 0.04em;

  ${up('pc')} {
    font-family: ${({ theme }) => theme.fonts[1]};
  }
`;

export const AddToFavotiteBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px 20px 0 20px;
`;

export const NoticeTitle = styled.h2`
  text-align: start;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
`;
export const Table = styled.table`
  table-layout: fixed;
  height: 150px;
`;

export const TableData = styled.td`
  text-align: start;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: 500;
  padding-right: 40px;
  :nth-child(2) {
    padding-right: 0;
  }
  padding-bottom: 8px;
`;

export const BlockBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
  margin: 20px 0 12px 0;
`;

export const NoticeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  padding: 8px;
  width: 100%;
  height: 38px;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: #f59256;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  cursor: pointer;
  &:hover,
  &:focus {
    border: 2px solid #ff6101;
    color: #ff6101;
  }
`;
