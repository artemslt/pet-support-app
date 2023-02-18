import { Search } from './NoticesSearch.styled';

export const NoticesSearch = () => {
  return (
    <>
      <Search placeholder="Search" />
      <button onClick={() => console.log('it work')}>click</button>
    </>
  );
};
