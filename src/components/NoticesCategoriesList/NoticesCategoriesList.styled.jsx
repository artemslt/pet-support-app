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

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 30%;
  bottom: 220px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  opacity: 0.8;
  cursor: pointer;
  color: ${prop => prop.theme.colors.mainAccent};
  transition: ${({ theme }) => theme.btnAnimationTransition};

  ${up('tablet')} {
    left: 320px;
  }
`;
