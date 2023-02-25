import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.section`
  width: 100%;
  min-width: 320px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 63px;
  padding-bottom: 100px;

  ${up('tablet')} {
    padding-top: 90px;
    padding-bottom: 80px;
  }
  ${up('pc')} {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    padding-top: 60px;
    padding-bottom: 40px;
    padding-right: 22px;
  }
`;
