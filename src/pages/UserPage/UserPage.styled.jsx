import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.section`
  width: 100%;
  min-width: 320px;

  ${up('mobileSizeM')} {
  }
  ${up('tablet')} {
  }
  ${up('pcSizeS')} {
  }
  ${up('pc')} {
    min-width: 1280px;
  }
  ${up('pcSizeL')} {
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 63px 32px 100px 0px; */
  padding-top: 63px;
  padding-bottom: 100px;
  /* margin: 0 auto; */

  ${up('tablet')} {
    /* padding: 90x 20px 80px; */
    padding-top: 90px;
    padding-bottom: 80px;
  }
  ${up('pc')} {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: row;
    padding-right: 16px;
    padding-top: 60px;
    padding-bottom: 40px;
  }
`;
