import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Container = styled.div`
  margin: auto;
  padding: 0 20px;
  max-width: 640px;
  padding: 0 20px;

  ${up('tablet')} {
    max-width: 768px;
    padding: 0 32px;
  }

  ${up('pcSizeS')} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
