import { Container } from 'components/Container/Container.styled';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { CommonTitle } from 'components/Title/Title';
import { Outlet } from 'react-router-dom';

const NoticesPage = () => {
  return (
    <Container style={{ textAlign: 'center', paddingBottom: 100 }}>
      <CommonTitle text={'Find your favorite pet'} />
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Outlet />
    </Container>
  );
};

export default NoticesPage;
