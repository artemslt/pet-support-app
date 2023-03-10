import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { NewsList } from 'components/NewsList/NewsList';
import { fetchNews } from 'redux/news/newsOperations';
import {
  NewsContainer,
  Label,
  Input,
  Title,
  GlobalStyle,
  SearchNewsButton,
  DeleteButton,
  ErrorText,
} from './NewsPage.styled';
import { Spinner } from 'components/Spinner/Spinner.styled';
import {
  selectError,
  selectNews,
  selectIsLoading,
} from 'redux/news/newsSelectors';
import { ReactComponent as DeleteIcon } from '../../images/x-circle.svg';
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { Container } from 'components/Container/Container.styled';
import { useTranslation } from 'react-i18next';

const NewsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNews);

  const newsTitle = searchParams.get('query') || '';

  const visibleNews =
    news.length &&
    news.filter(item =>
      item.title.toLowerCase().includes(newsTitle.toLowerCase())
    );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const updateQueryString = e => {
    setSearchParams({ query: e.target.value });
  };

  const onClearField = e => {
    e.preventDefault();
    setSearchParams({ query: '' });
  };

  return (
    <Container>
      <NewsContainer>
        <GlobalStyle />
        <Title>{t('News')}</Title>
        <Label>
          <Input
            value={newsTitle}
            name="search"
            placeholder={t('Search')}
            type="text"
            onChange={updateQueryString}
          />
          {newsTitle ? (
            <DeleteButton type="submit" onClick={onClearField}>
              <DeleteIcon />
            </DeleteButton>
          ) : (
            <SearchNewsButton>
              <SearchIcon />
            </SearchNewsButton>
          )}
        </Label>
        {isLoading && !error && <Spinner />}
        {!visibleNews && !isLoading && (
          <ErrorText>
            Sorry, there is no news at this moment. Try again later.
          </ErrorText>
        )}
        {!isLoading && visibleNews && <NewsList news={visibleNews} />}
      </NewsContainer>
    </Container>
  );
};

export default NewsPage;
