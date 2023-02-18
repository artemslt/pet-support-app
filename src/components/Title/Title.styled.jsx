import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  margin-bottom: 40px;
`;
