import { SectionHome, TitleHome, BackgroundImage } from './HomePage.styled';
import { Container } from 'components/Container/Container.styled';

export const HomePage = () => {
  return (
    <SectionHome>
      <Container>
        <TitleHome>Take good care of your small pets</TitleHome>
      </Container>
      <BackgroundImage />
    </SectionHome>
  );
};
