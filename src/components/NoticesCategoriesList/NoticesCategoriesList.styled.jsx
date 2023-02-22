import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const CategoriesList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  ${up('tablet')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }

  ${up('pc')} {
    grid-template-columns: repeat(4, 1fr);
  }
  /* display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  grid-gap: 32px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none; */
  /* margin-left: auto;
  margin-right: auto; */
`;
