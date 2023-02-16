import styled from 'styled-components';

export const App = () => {
  return (
    <Wrapper>
      <h1> HELLo</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${prop => prop.theme.colors.gradient};
  font-family: ${prop => prop.theme.fonts[1]};
`;
