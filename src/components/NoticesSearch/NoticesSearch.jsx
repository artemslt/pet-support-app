import { Search, SearchBtn, Form } from './NoticesSearch.styled';
import { ReactComponent as SearchIcon } from './search-24px 1.svg';
import { ReactComponent as DelIcon } from './x-circle.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/notices/noticesSlice';

export const NoticesSearch = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    setFilter(e.target.value);
    dispatch(addFilter(e.target.value));
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
