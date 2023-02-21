import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;
  border: 1px solid $border-color;
  box-sizing: border-box;
  margin-bottom: 40px;
  :last-child {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: 60px;
    margin-right: 30px;
    width: calc(100% / 2 - 30px);
    :nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    width: calc(100% / 3 - 30px);
    :nth-child(2n) {
      margin-right: 30px;
    }
    :nth-child(3n) {
      margin-right: 0px;
    }
  }
`;

export const ItemBorder = styled.div`
  width: 200px;
  height: 4px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media screen and (min-width: 1280px) {
    width: 340px;
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 16px;
  height: 66px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111321;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  // white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    -webkit-line-clamp: 6;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
    -webkit-line-clamp: 5;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemDate = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(17, 17, 17, 0.6);
`;

export const ItemLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: underline;
  color: #f59256;
`;
