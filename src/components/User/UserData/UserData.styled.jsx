import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const UserCardWrapp = styled.div`
  margin-bottom: 46px;
  ${up('tablet')} {
    margin-bottom: 20px;
  }
  ${up('pc')} {
    margin-right: 32px;
  }
`;

export const UserCard = styled.div`
  max-width: 350px;
  height: 537px;
  padding: 20px 24px 10px 23px;
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
  ${up('pc')} {
    flex-direction: column;
    justify-content: flex-start;
    width: 411px;
    height: 541px;
    padding: 20px 16px 18px;
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
