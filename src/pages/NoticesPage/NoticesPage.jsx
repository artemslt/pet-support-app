import { Container } from 'components/Container/Container.styled';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { CommonTitle } from 'components/Title/Title';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { NoticeSearchList } from 'components/NoticesSearch/NoticeSearchList';

const NoticesPage = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Container style={{ textAlign: 'center', paddingBottom: 100 }}>
      <CommonTitle text={t('Main_title')} />
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Outlet />
      {pathname === '/notices/' && <NoticeSearchList />}
    </Container>
  );
};

export default NoticesPage;
