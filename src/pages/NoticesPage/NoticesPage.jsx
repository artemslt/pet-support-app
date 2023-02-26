import { Container } from 'components/Container/Container.styled';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { CommonTitle } from 'components/Title/Title';
import { Outlet, useLocation } from 'react-router-dom';
import { NoticeSearchList } from 'components/NoticesSearch/NoticeSearchList';
const NoticesPage = () => {
  const { pathname } = useLocation();

  return (
    <Container style={{ textAlign: 'center', paddingBottom: 100 }}>
      <CommonTitle text={'Find your favorite pet'} />
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Outlet />
      {pathname === '/notices' && <NoticeSearchList />}
    </Container>
  );
};

export default NoticesPage;
