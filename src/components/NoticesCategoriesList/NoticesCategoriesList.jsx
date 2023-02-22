import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesList } from './NoticesCategoriesList.styled';

export const NoticesCategoriesList = () => {
  return (
    <>
      <CategoriesList>
        <NoticeCategoryItem />
        <NoticeCategoryItem />
        <NoticeCategoryItem />
        <NoticeCategoryItem />
        <NoticeCategoryItem />
        <NoticeCategoryItem />
        <NoticeCategoryItem />
      </CategoriesList>
    </>
  );
};
