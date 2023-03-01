import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  Item,
  ItemTitle,
  ItemText,
  ItemContainer,
  ItemDate,
  ItemLink,
  ItemBorder,
} from './NewsItem.styled';

export const NewsItem = ({ title, url, description, date }) => {
  const { t } = useTranslation();
  return (
    <Item>
      <ItemBorder></ItemBorder>
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{description}</ItemText>
      <ItemContainer>
        <ItemDate>{date}</ItemDate>
        <ItemLink href={url} target="_blank">
          {t('Read_more')}
        </ItemLink>
      </ItemContainer>
    </Item>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
};
