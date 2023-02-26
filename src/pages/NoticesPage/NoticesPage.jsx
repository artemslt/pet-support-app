import { Container } from 'components/Container/Container.styled';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { CommonTitle } from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
  const { t } = useTranslation();
  return (
    <Container style={{ textAlign: 'center', paddingBottom: 100 }}>
      <CommonTitle text={t('Main_title')} />
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Outlet />
    </Container>
  );
};

export default NoticesPage;
