import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  /* position: absolute; */

  ${up('mobileSizeM')} {
  }
  ${up('tablet')} {
  }
  ${up('pcSizeS')} {
  }
  ${up('pcSizeL')} {
  }
`;
