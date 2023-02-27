import { Search, SearchBtn, Form } from './NoticesSearch.styled';
import { ReactComponent as SearchIcon } from './search-24px 1.svg';
import { ReactComponent as DelIcon } from './x-circle.svg';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/notices/noticesSlice';
import { useSearchParams } from 'react-router-dom';
export const NoticesSearch = () => {
  const [filter, setFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  const dispatch = useDispatch();

  if (postQuery) {
    // setFilter(postQuery);
    dispatch(addFilter(postQuery));
  }
  const onChangeFilter = e => {
    setFilter(e.target.value);
    setSearchParams({ post: e.target.value });
  };
  const onClickBtn = e => {
    e.preventDefault();
    setFilter('');
    dispatch(addFilter(''));
  };

  return (
    <>
      <Form>
        <Search
          placeholder="Search"
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
