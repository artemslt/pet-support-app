import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'components/Spinner/Spinner.styled';
import { CategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/notices/noticesSelectors';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem.jsx';
import { ErrorText } from './NoticesSearch.styled';
export const NoticeSearchList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filter = useSelector(selectFilter);
  function onListChange(newList) {
    setItems(newList);
  }

  useEffect(() => {
    const fatchGetSearch = async filter => {
      try {
        setIsLoading(true);
        const notices = await axios.get(`notices/${filter}`);

        setItems(notices.data.data.notices);
        setIsLoading(false);
      } catch (error) {}
    };
    fatchGetSearch(filter);
  }, [filter]);

  return (
    <>
      {isLoading ? (
        <Spinner style={{ margin: '0 auto' }} />
      ) : (
        <CategoriesList>
          {items.length === 0 ? (
            <ErrorText>You haven't notices yet</ErrorText>
          ) : (
            <NoticeCategoryItem items={items} onListChange={onListChange} />
          )}
        </CategoriesList>
      )}
    </>
  );
};
