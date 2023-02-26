import axios from 'axios';
import { ReactComponent as FavoriteIcon } from './akar-icons_heart.svg';
import { ReactComponent as InFavoriteIcon } from './icon-heart-filled.svg';
import { ReactComponent as DeleteIcon } from './fluent_delete-16-filled.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { selectFilter } from 'redux/notices/noticesSelectors';
import {
  Card,
  Image,
  Thumb,
  Badge,
  CategoryTitle,
  AddToFavotiteBtn,
  NoticeTitle,
  NoticeBtn,
  BlockBtns,
  Table,
  TableData,
} from './NoticeCategoryItem.styled';
import { useTranslation } from 'react-i18next';

import { refreshUser } from 'redux/auth/authOperations';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

export const NoticeCategoryItem = ({ items }) => {
  const { t } = useTranslation();
  const { _id: userId, favorite } = useSelector(selectUser);
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const normalizedFilter = filter.toLowerCase().trim();
  const filteredNotices = items.filter(item =>
    item.title.toLowerCase().includes(normalizedFilter)
  );

  console.log(filteredNotices);
  const addToFavorite = async id => {
    try {
      await axios.post(`notices/favorite/${id}`);
      dispatch(refreshUser());
    } catch (error) {
      console.log(error.message);
    }
  };
  const delFromFavorite = async id => {
    try {
      await axios.delete(`notices/favorite/${id}`);
      dispatch(refreshUser());
    } catch (error) {
      console.log(error.message);
    }
  };

  const addOrDell = id => {
    if (favorite.includes(id)) {
      delFromFavorite(id);
    } else {
      addToFavorite(id);
    }
  };

  return (
    <>
      {filteredNotices.map(
        ({ owner, title, _id, image, category, breed, location, price }) => (
          <Card key={_id}>
            <div style={{ position: 'relative' }}>
              <Image src={image} alt="pet" />
              <Badge>
                <CategoryTitle>{category}</CategoryTitle>
              </Badge>
              <AddToFavotiteBtn type="submit" onClick={() => addOrDell(_id)}>
                {favorite.includes(_id) ? <InFavoriteIcon /> : <FavoriteIcon />}
              </AddToFavotiteBtn>
            </div>

            <Thumb>
              <div
                style={{
                  height: 80,
                  overflow: 'hidden',
                  marginBottom: 20,
                }}
              >
                <NoticeTitle>{title}</NoticeTitle>
              </div>

              <Table>
                <tbody>
                  <tr>
                    <TableData>{t('Breed')}:</TableData>
                    <TableData>{breed}</TableData>
                  </tr>
                  <tr>
                    <TableData>{t('Place')}:</TableData>
                    <TableData>{location}</TableData>
                  </tr>
                  <tr>
                    <TableData>{t('Age')}:</TableData>
                    <TableData>{t('very_old')}</TableData>
                  </tr>
                  {category === 'sell' && (
                    <tr>
                      <TableData>{t('Price')}:</TableData>
                      <TableData>{price}$</TableData>
                    </tr>
                  )}
                </tbody>
              </Table>

              <BlockBtns>
                <NoticeBtn>{t('Learn_more')}</NoticeBtn>
                {userId === owner && (
                  <NoticeBtn>
                    <p style={{ marginRight: 13 }}>Delete</p>
                    <DeleteIcon style={{ fill: 'currentcolor' }} />
                  </NoticeBtn>
                )}
              </BlockBtns>
            </Thumb>
          </Card>
        )
      )}
    </>
  );
};
