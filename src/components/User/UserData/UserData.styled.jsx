import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const UserCardWrapp = styled.div`
  margin-bottom: 46px;
  ${up('tablet')} {
    margin-bottom: 20px;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }
  ${up('pc')} {
    width: 411px;
    margin-right: 32px;
    margin-left: 0;
  }
`;

export const UserCard = styled.div`
  width: 280px;
  height: 537px;
  padding: 20px 15px 10px;
  margin: 0 auto;
  background: ${prop => prop.theme.colors.mainWhite};
  border-radius: 40px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  ${up('tablet')} {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    max-width: 736px;
    width: 736px;
    height: 311px;
    padding: 40px 0 79px 32px;
    margin-right: 0;
    margin-left: 0;
    border-radius: 0px 40px 40px 0px;
  }
  ${up('tabletM')} {
    border-radius: 40px;
    margin-right: auto;
    margin-left: auto;
  }
  ${up('pc')} {
    flex-direction: column;
    justify-content: flex-start;
    width: 411px;
    height: 541px;
    padding: 20px 27px 18px;
    border-radius: 0px 40px 40px 0px;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Title = styled.h3`
  font-family: 'Manrope';
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: 28px;
  line-height: 1.37;
  color: ${prop => prop.theme.colors.mainBlack};
  padding-left: 16px;
  margin-bottom: 24px;
`;
