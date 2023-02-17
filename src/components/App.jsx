import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const App = () => {
  return (
    <Wrapper>
      <h1> HELLo</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: ${prop => prop.theme.fonts[1]};

  ${up('mobile')} {
    background: ${prop => prop.theme.colors.activeAccent};
  }
  ${up('tablet')} {
    background: ${prop => prop.theme.colors.background};
  }
  ${up('pc')} {
    background: ${prop => prop.theme.colors.gradient};
  }
`;
