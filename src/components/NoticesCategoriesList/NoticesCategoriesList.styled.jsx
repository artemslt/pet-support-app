import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const CategoriesList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  ${up('tablet')} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 32px;
  }

  ${up('pcSizeS')} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 32px;
  }

  ${up('pcSizeM')} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 48px;
  }

  ${up('pc')} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 32px;
  }
  list-style: none;
  /* padding-left: 0px;
  display: grid;
  margin: 0px auto;
  list-style: none;
  ${up('tablet')} {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    max-width: calc(100vw - 32px);
    grid-gap: 32px;
  }

  ${up('pc')} {
    grid-template-columns: repeat(4, 1fr);
  } */

  /* ${up('pc')} {
    grid-template-columns: repeat(4, 1fr);
  } */

  /* padding: 0;
  margin: 0;
  list-style: none;

  ${up('tablet')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
  }

  ${up('pc')} {
    grid-template-columns: repeat(4, 1fr);
  } */
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
