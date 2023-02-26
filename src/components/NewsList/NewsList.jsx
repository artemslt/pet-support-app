import PropTypes from 'prop-types';

import { NewsItem } from 'components/NewsItem/NewsItem';
import { List } from './NewsList.styled';
import { useTranslation } from 'react-i18next';

export const NewsList = ({ news }) => {
  const { t } = useTranslation();
  return (
    <List>
      {!news.length ? (
        <b>{t('No_news_notification')}</b>
      ) : (
        news
          .sort(({ date: a }, { date: b }) => (a > b ? -1 : 0))
          .map(({ _id, title, url, description, date }) => (
            <NewsItem
              key={_id}
              title={title}
              url={url}
              description={description}
              date={new Date(date).toLocaleDateString().split('.').join('/')}
            />
          ))
      )}
    </List>
  );
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
};
