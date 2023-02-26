import { SectionHome, TitleHome, BackgroundImage } from './HomePage.styled';
import { Container } from 'components/Container/Container.styled';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <SectionHome>
      <Container>
        <TitleHome>{t('Title')}</TitleHome>
      </Container>
      <BackgroundImage />
    </SectionHome>
  );
};
