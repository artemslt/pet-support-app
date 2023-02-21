import { Search, SearchBtn, Form } from './NoticesSearch.styled';
import { ReactComponent as SearchIcon } from './search-24px 1.svg';

export const NoticesSearch = () => {
  return (
    <>
      <Form>
        <Search placeholder="Search" type="text" />
        <SearchBtn onClick={() => console.log('it work')}>
          <SearchIcon />
        </SearchBtn>
      </Form>
    </>
  );
};
