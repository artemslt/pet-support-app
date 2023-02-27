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

  const onChangeFilter = e => {
    setSearchParams({ post: e.target.value });
    dispatch(addFilter(e.target.value));
    // setFilter(e.target.value);
    // dispatch(addFilter(e.target.value));
  };
  const onClickBtn = e => {
    e.preventDefault();
    // setFilter('');
    setSearchParams({ post: '' });
    dispatch(addFilter(''));
  };

  useEffect(() => {
    setSearchParams({ post: filter });
    if (postQuery) {
      dispatch(addFilter(postQuery));
    }
  }, [dispatch, filter, postQuery, setSearchParams]);

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
