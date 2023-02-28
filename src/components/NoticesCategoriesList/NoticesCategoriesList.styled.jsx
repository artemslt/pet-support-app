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

export const ButtonMore = styled.button`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 44px;
  margin-bottom: 16px;
  cursor: pointer;
  border-radius: 40px;
  background-color: ${prop => prop.theme.colors.background};
  border: 2px solid ${prop => prop.theme.colors.mainAccent};
  font-family: ${prop => prop.theme.fonts[1]};
  font-weight: ${prop => prop.theme.fontWeights[1]};
  font-size: ${prop => prop.theme.fontSizes[4]}px;
  line-height: 27px;
  letter-spacing: 0.04em;
  color: ${prop => prop.theme.colors.mainAccent};
  transition: ${({ theme }) => theme.btnAnimationTransition};
  &:hover,
  &:focus {
    background-color: ${prop => prop.theme.colors.mainAccent};
    color: ${prop => prop.theme.colors.mainWhite};
  }
  &[type='submit']:disabled {
    background-color: ${({ theme }) => theme.colors.mainAccent};
    color: ${({ theme }) => theme.colors.mainWhite};
    opacity: 0.5;
  }
  ${up('tablet')} {
    background-color: ${prop => prop.theme.colors.mainWhite};
    &:hover,
    &:focus {
      background-color: ${prop => prop.theme.colors.mainAccent};
    }
    outline: none;
    width: 448px;
    height: 44px;
  }
  ${up('pc')} {
    width: 458px;
    height: 48px;
  }
`;
