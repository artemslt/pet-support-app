import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { CommonTitle } from 'components/Title/Title';

const NoticesPage = () => {
  return (
    <>
      <CommonTitle text={'Find your favorite pet'} />
      <NoticesSearch />
      <NoticesCategoriesNav />
    </>
  );
};

export default NoticesPage;
