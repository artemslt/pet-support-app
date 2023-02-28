import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import {
  GlobalStyle,
  Wrapper,
  ButtonCloses,
  ClosesIcon,
  ModalContainer,
  PetImage,
  Badge,
  PetCategory,
  PetTitle,
  TableData,
  Table,
  TableValue,
  ValueHover,
  CommentBold,
  Comment,
  Btn,
  BlockBtns,
  FavoriteIcon,
  ImageContainer,
  TableContainer,
} from './NoticesModalLearnMore.styled';

export const LearnMore = ({ onToggleModal, data, onClickOnFavoriteBtn }) => {
  const { favorite } = useSelector(selectUser);
  const { t } = useTranslation();
  const {
    breed,
    category,
    date,
    comments,
    image,
    location,
    name,
    price,
    sex,
    title,
    owner,
    _id,
  } = data;

  const calcAge = date => {
    const diff = moment(date, 'DD-MM-YYYY');
    const duration = moment().diff(diff, 'milliseconds');
    const years = moment.duration(duration).years();
    const months = moment.duration(duration).months();

    switch (years) {
      case 0: {
        if (months < 1) return 'under a month';
        return `${months} months`;
      }

      case 1: {
        return '1 year';
      }
      default: {
        return `${years} years`;
      }
    }
  };

  return (
    <>
      {Object.keys(data).length && (
        <Wrapper>
          <GlobalStyle />
          <ButtonCloses
            onClick={e => {
              onToggleModal(e);
            }}
          >
            <ClosesIcon />
          </ButtonCloses>
          <ModalContainer>
            <ImageContainer>
              <PetImage src={image} alt="pets" />
              <Badge>
                <PetCategory>{category}</PetCategory>
              </Badge>
            </ImageContainer>
            <TableContainer>
              <PetTitle>{title}</PetTitle>
              <Table>
                <tbody>
                  <tr>
                    <TableData>{t('Name')}:</TableData>
                    <TableValue>{name}</TableValue>
                  </tr>
                  {date && (
                    <tr>
                      <TableData>{t('Birthday')}:</TableData>
                      <TableValue>{calcAge(date)}</TableValue>
                    </tr>
                  )}
                  <tr>
                    <TableData>{t('Breed')}:</TableData>
                    <TableValue>{breed}</TableValue>
                  </tr>
                  <tr>
                    <TableData>{t('Location')}:</TableData>
                    <TableValue>{location}</TableValue>
                  </tr>
                  <tr>
                    <TableData>{t('The_sex')}:</TableData>
                    <TableValue>{sex}</TableValue>
                  </tr>
                  <tr>
                    <TableData>{t('Owner')}:</TableData>
                    <TableValue>{owner.name}</TableValue>
                  </tr>
                  <tr>
                    <TableData>{t('Email')}:</TableData>
                    <TableValue
                      style={{ cursor: 'pointer' }}
                      onClick={e => window.open(`mailto:userlala@gmail.com`)}
                    >
                      <ValueHover>{owner.email}</ValueHover>
                    </TableValue>
                  </tr>
                  <tr>
                    <TableData>{t('Phone')}:</TableData>
                    <TableValue
                      style={{ cursor: 'pointer' }}
                      onClick={e => window.open(`tel:+380931103908`)}
                    >
                      <ValueHover>{owner.phone}</ValueHover>
                    </TableValue>
                  </tr>
                  {category === 'sell' && (
                    <tr>
                      <TableData>{t('Price')}:</TableData>
                      <TableValue>{price}</TableValue>
                    </tr>
                  )}
                </tbody>
              </Table>
            </TableContainer>
          </ModalContainer>
          <Comment>
            {' '}
            <CommentBold>{t('Comment')}: </CommentBold>
            {comments}
          </Comment>
          <BlockBtns>
            <Btn onClick={e => window.open(`tel:${owner.phone}`)}>Contact</Btn>
            {!favorite ? (
              <Btn onClick={e => onClickOnFavoriteBtn(_id)}>
                {t('Add_to')} <FavoriteIcon />
              </Btn>
            ) : !favorite.includes(_id) ? (
              <Btn onClick={e => onClickOnFavoriteBtn(_id)}>
                {t('Add_to')} <FavoriteIcon />
              </Btn>
            ) : (
              <Btn onClick={e => onClickOnFavoriteBtn(_id)}>
                {t('Delete_from')} <FavoriteIcon />
              </Btn>
            )}
          </BlockBtns>
        </Wrapper>
      )}
    </>
  );
};
