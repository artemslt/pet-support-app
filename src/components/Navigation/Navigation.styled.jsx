import { between } from 'styled-breakpoints';
import styled from 'styled-components';
// import { down } from 'styled-breakpoints';

export const NavigationStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${between('tablet', 'tabletM')} {
    padding-right: 20px;
  }
`;
