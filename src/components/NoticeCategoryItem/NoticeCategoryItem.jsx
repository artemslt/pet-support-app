import { ReactComponent as FavoriteIcon } from 'images/noticePage/akar-icons_heart.svg';
import { ReactComponent as InFavoriteIcon } from 'images/noticePage/icon-heart-filled.svg';
import { ReactComponent as DeleteIcon } from 'images/noticePage/fluent_delete-16-filled.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { selectFavorite, selectFilter } from 'redux/notices/noticesSelectors';
import { ModalMenu } from 'components/Modal/Modal';
import { LearnMore } from 'components/NoticesModalLearnMore/NoticesModalLearnMore';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
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

import { ModalDelete } from '../ModalNoticeDelete/ModalDelete';
import { ErrorToastIcon } from 'components/ToastIcon/ToastIcon.styled';

import i18n from 'i18n';
import {
  addFavorite,
  deleteFavorite,
  fetchAllFavorite,
} from 'redux/notices/noticeOPerations';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

export const NoticeCategoryItem = ({ items, onListChange, pathname }) => {
  const { t } = useTranslation();
  const { _id: userId } = useSelector(selectUser);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const favorite = useSelector(selectFavorite) ?? [];

  const dispatch = useDispatch();
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
  const [deleteId, setDeleteId] = useState(null);
  const onToggleModal = e => {
    setModalToggle(false);
    setOpenModalDelete(false);
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


  useEffect(() => {
    dispatch(fetchAllFavorite());
  }, [dispatch]);

  const addToFavorite = id => {
    dispatch(addFavorite(id));

  };

  const delFromFavorite = id => {
    dispatch(deleteFavorite(id));
    if (pathname === '/notices/favorite') {
      const newList = items.filter(item => item._id !== id);
      onListChange(newList);
    }
  };

  const addOrDell = id => {
    if (favorite && favorite.find(item => item._id === id)) {
      return delFromFavorite(id);
    } else {
      return addToFavorite(id);
    }
  };
  const onClickOnFavoriteBtn = id => {
    if (!isLoggedIn) {
      return toast.error(i18n.t('pet_add_notice_auth'), {
        icon: <ErrorToastIcon />,
      });
    }

    addOrDell(id);
  };

  const deletePet = async id => {
    try {
      await axios.delete(`notices/notice/${id}`);
      dispatch(refreshUser());
      setDeleteId(null);
    } catch (error) {
      console.log(error);
    }
  };

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

  const categorySelector = categ => {
    switch (categ) {
      case 'for-free': {
        return 'in good hands';
      }
      case 'lost-found': {
        return 'lost/found';
      }
      default: {
        return 'sell';
      }
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
                <CategoryTitle>{categorySelector(category)}</CategoryTitle>
              </Badge>
              <AddToFavotiteBtn
                type="submit"
                onClick={() => onClickOnFavoriteBtn(_id)}
              >
                {favorite && favorite.find(item => item._id === _id) ? (
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
                    <TableData>{calcAge(date)}</TableData>
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
                {userId === owner._id && (
                  <NoticeBtn
                    onClick={e => {
                      setOpenModalDelete(true);
                      setDeleteId(_id);
                    }}
                  >
                    <p style={{ marginRight: 13 }}>{t('Delete')}</p>
                    <DeleteIcon style={{ fill: 'currentcolor' }} />
                  </NoticeBtn>
                )}
              </BlockBtns>
            </Thumb>
          </Card>
        )
      )}
      {modalToggle && !isLoading && (
        <ModalMenu onClose={() => setModalToggle(false)} open={modalToggle}>
          <LearnMore
            onToggleModal={onToggleModal}
            data={notice}
            onClickOnFavoriteBtn={onClickOnFavoriteBtn}
          />
        </ModalMenu>
      )}

      <ModalMenu
        onClose={() => setOpenModalDelete(false)}
        open={openModalDelete}
        openModalDelete={openModalDelete}
      >
        <ModalDelete
          onToggleModal={onToggleModal}
          deletePet={deletePet}
          deleteId={deleteId}
        />
      </ModalMenu>
    </>
  );
};
