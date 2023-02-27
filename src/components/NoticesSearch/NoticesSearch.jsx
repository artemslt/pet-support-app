import { Search, SearchBtn, Form } from './NoticesSearch.styled';
import { ReactComponent as SearchIcon } from './search-24px 1.svg';
import { ReactComponent as DelIcon } from './x-circle.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/notices/noticesSlice';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { selectFilter } from 'redux/notices/noticesSelectors';
export const NoticesSearch = () => {
  const { t } = useTranslation();
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  useEffect(() => {
    setSearchParams({ post: filter });

    // dispatch(addFilter(postQuery));
  }, [dispatch, filter, postQuery, setSearchParams]);

  if (postQuery) {
    // setFilter(postQuery);
    dispatch(addFilter(postQuery));
  }

  const onChangeFilter = e => {
    dispatch(addFilter(e.target.value));
    setSearchParams({ post: e.target.value });
    // setFilter(e.target.value);
    // dispatch(addFilter(e.target.value));
  };
  const onClickBtn = e => {
    e.preventDefault();
    // setFilter('');
    setSearchParams({ post: '' });
    dispatch(addFilter(''));
  };

  return (
    <>
      <Form>
        <Search
          placeholder={t('Search')}
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
        <SearchBtn type="button" onClick={onClickBtn}>
          {filter.length > 0 ? <DelIcon /> : <SearchIcon />}
        </SearchBtn>
      </Form>
    </>
  );
};
