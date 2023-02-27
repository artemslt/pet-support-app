import { ReactComponent as FavoriteIcon } from './akar-icons_heart.svg';
import { ReactComponent as InFavoriteIcon } from './icon-heart-filled.svg';
import { ReactComponent as DeleteIcon } from './fluent_delete-16-filled.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { selectFilter } from 'redux/notices/noticesSelectors';
import { ModalMenu } from 'components/Modal/Modal';
import { LearnMore } from 'components/NoticesModalLearnMore/NoticesModalLearnMore';
import { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
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
import { useNavigate } from 'react-router-dom';

import { ModalDelete } from '../ModalNoticeDelete/ModalDelete';
import i18n from 'i18n';
axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

export const NoticeCategoryItem = ({ items, onListChange }) => {
  const { t } = useTranslation();
  const { _id: userId, favorite } = useSelector(selectUser);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const filter = useSelector(selectFilter);
  const normalizedFilter = filter.toLowerCase().trim();
  const filteredNotices = items.filter(item =>
    item.title.toLowerCase().includes(normalizedFilter)
  );
  const [notice, SetNotice] = useState({});
  const currentIdRef = useRef();
  const [modalToggle, setModalToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onToggleModal = e => {
    setModalToggle(false);
  };

  const onClickLearnMore = e => {
    const getNoticeById = async id => {
      setIsLoading(true);
      try {
        const notice = await axios.get(`notices/notice/${id}`);
        SetNotice(notice.data.data.notice);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNoticeById(e.target.id);
    setModalToggle(true);
  };

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
      const newList = items.filter(item => item._id !== id);

      onListChange(newList);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addOrDell = id => {
    if (favorite && favorite.includes(id)) {
      delFromFavorite(id);
    } else {
      addToFavorite(id);
    }
  };
  const onClickOnFavoriteBtn = id => {
    if (!isLoggedIn) {
      toast.error(i18n.t('pet_add_notice_auth'), {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/login');
      return;
    }

    addOrDell(id);
  };

  const deletePet = async id => {
    try {
      await axios.delete(`notices/notice/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {filteredNotices.map(
        ({
          owner,
          title,
          _id,
          image,
          category,
          breed,
          location,
          price,
          date,
        }) => (
          <Card key={_id}>
            <div style={{ position: 'relative' }}>
              <Image src={image} alt="pet" />
              <Badge>
                <CategoryTitle>{category}</CategoryTitle>
              </Badge>
              <AddToFavotiteBtn
                type="submit"
                onClick={() => onClickOnFavoriteBtn(_id)}
              >
                {favorite && favorite.includes(_id) ? (
                  <InFavoriteIcon />
                ) : (
                  <FavoriteIcon />
                )}
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
                    <TableData>{date}</TableData>
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
                <NoticeBtn
                  onClick={onClickLearnMore}
                  ref={currentIdRef}
                  id={_id}
                >
                  {t('Learn_more')}
                </NoticeBtn>
                {!isLoading && (
                  <ModalMenu
                    onClose={() => setModalToggle(false)}
                    open={modalToggle}
                  >
                    <LearnMore
                      onToggleModal={onToggleModal}
                      data={notice}
                      onClickOnFavoriteBtn={onClickOnFavoriteBtn}
                    />
                  </ModalMenu>
                )}
                {userId === owner && (
                  <NoticeBtn
                    onClick={e => {
                      setOpenModalDelete(true);
                    }}
                  >
                    <p style={{ marginRight: 13 }}>{t('Delete')}</p>
                    <DeleteIcon style={{ fill: 'currentcolor' }} />
                  </NoticeBtn>
                )}
                <ModalMenu
                  onClose={() => setOpenModalDelete(false)}
                  open={openModalDelete}
                  openModalDelete={openModalDelete}
                >
                  <ModalDelete
                    onToggleModal={onToggleModal}
                    id={_id}
                    deletePet={deletePet}
                  />
                </ModalMenu>
              </BlockBtns>
            </Thumb>
          </Card>
        )
      )}
    </>
  );
};
