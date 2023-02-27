import moment from 'moment';
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
                    <TableData>Name:</TableData>
                    <TableValue>{name}</TableValue>
                  </tr>
                  {date && (
                    <tr>
                      <TableData>Birthday:</TableData>
                      <TableValue>{calcAge(date)}</TableValue>
                    </tr>
                  )}
                  <tr>
                    <TableData>Breed:</TableData>
                    <TableValue>{breed}</TableValue>
                  </tr>
                  <tr>
                    <TableData>Location:</TableData>
                    <TableValue>{location}</TableValue>
                  </tr>
                  <tr>
                    <TableData>The sex:</TableData>
                    <TableValue>{sex}</TableValue>
                  </tr>
                  <tr>
                    <TableData>Owner:</TableData>
                    <TableValue>{owner.name}</TableValue>
                  </tr>
                  <tr>
                    <TableData>Email:</TableData>
                    <TableValue
                      style={{ cursor: 'pointer' }}
                      onClick={e => window.open(`mailto:userlala@gmail.com`)}
                    >
                      <ValueHover>{owner.email}</ValueHover>
                    </TableValue>
                  </tr>
                  <tr>
                    <TableData>Phone:</TableData>
                    <TableValue
                      style={{ cursor: 'pointer' }}
                      onClick={e => window.open(`tel:+380931103908`)}
                    >
                      <ValueHover>{owner.phone}</ValueHover>
                    </TableValue>
                  </tr>
                  {category === 'sell' && (
                    <tr>
                      <TableData>Price:</TableData>
                      <TableValue>{price}</TableValue>
                    </tr>
                  )}
                </tbody>
              </Table>
            </TableContainer>
          </ModalContainer>
          <Comment>
            {' '}
            <CommentBold>Comment: </CommentBold>
            {comments}
          </Comment>
          <BlockBtns>
            <Btn onClick={e => window.open(`tel:${owner.phone}`)}>Contact</Btn>
            {!favorite ? (
              <Btn onClick={e => onClickOnFavoriteBtn(_id)}>
                Add to <FavoriteIcon />
              </Btn>
            ) : !favorite.includes(_id) ? (
              <Btn onClick={e => onClickOnFavoriteBtn(_id)}>
                Add to <FavoriteIcon />
              </Btn>
            ) : (
              <Btn onClick={e => onClickOnFavoriteBtn(_id)}>
                Delete from <FavoriteIcon />
              </Btn>
            )}
          </BlockBtns>
        </Wrapper>
      )}
    </>
  );
};
