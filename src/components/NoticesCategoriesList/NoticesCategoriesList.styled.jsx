import styled from 'styled-components';

export const CategoriesList = styled.ul`
  /* display: flex;
  gap: 32px;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  */

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  grid-gap: 32px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
