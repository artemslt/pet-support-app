import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'components/Spinner/Spinner.styled';
import { CategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/notices/noticesSelectors';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem.jsx';
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
        console.log(notices.data.data.result);
        setItems(notices.data.data.result);
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
            <h2>You haven't notices yet</h2>
          ) : (
            <NoticeCategoryItem items={items} onListChange={onListChange} />
          )}
        </CategoriesList>
      )}
    </>
  );
};
