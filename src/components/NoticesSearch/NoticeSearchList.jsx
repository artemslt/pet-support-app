import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'components/Spinner/Spinner.styled';
import {
  Card,
  Image,
  Badge,
  CategoryTitle,
  AddToFavotiteBtn,
  Thumb,
  NoticeTitle,
  Table,
  TableData,
  BlockBtns,
  NoticeBtn,
} from '../NoticeCategoryItem/NoticeCategoryItem.styled.jsx';
import { CategoriesList } from 'components/NoticesCategoriesList/NoticesCategoriesList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/notices/noticesSelectors';
import { ReactComponent as FavoriteIcon } from '../NoticeCategoryItem/akar-icons_heart.svg';
import { ReactComponent as InFavoriteIcon } from '../NoticeCategoryItem/icon-heart-filled.svg';
import { ReactComponent as DeleteIcon } from '../NoticeCategoryItem/fluent_delete-16-filled.svg';
import { selectUser } from 'redux/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
export const NoticeSearchList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filter = useSelector(selectFilter);
  const { _id: userId, favorite } = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const fatchGetSearch = async filter => {
      try {
        setIsLoading(true);
        const notices = await axios.get(`notices/${filter}`);

        setItems(notices.data.data.result);
        setIsLoading(false);
      } catch (error) {}
    };
    fatchGetSearch(filter);
  }, [filter]);

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

  const addToFavorite = async id => {
    try {
      await axios.post(`notices/favorite/${id}`);
      dispatch(refreshUser());
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log('====================================');
  console.log(items);
  console.log('====================================');
  return (
    <>
      {isLoading ? (
        <Spinner style={{ margin: '0 auto' }} />
      ) : (
        <CategoriesList>
          {items.map(
            ({
              owner,
              title,
              _id,
              image,
              category,
              breed,
              location,
              price,
            }) => (
              <Card key={_id}>
                <div style={{ position: 'relative' }}>
                  <Image src={image} alt="pet" />
                  <Badge>
                    <CategoryTitle>{category}</CategoryTitle>
                  </Badge>
                  <AddToFavotiteBtn
                    type="submit"
                    onClick={() => addOrDell(_id)}
                  >
                    {favorite.includes(_id) ? (
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
                        <TableData>Breed:</TableData>
                        <TableData>{breed}</TableData>
                      </tr>
                      <tr>
                        <TableData>Place:</TableData>
                        <TableData>{location}</TableData>
                      </tr>
                      <tr>
                        <TableData>Age:</TableData>
                        <TableData>very old</TableData>
                      </tr>
                      {category === 'sell' && (
                        <tr>
                          <TableData>Price:</TableData>
                          <TableData>{price}$</TableData>
                        </tr>
                      )}
                    </tbody>
                  </Table>

                  <BlockBtns>
                    <NoticeBtn>Learn more</NoticeBtn>
                    {userId === owner && (
                      <NoticeBtn
                      // onClick={e => {
                      //   setOpenModalDelete(true);
                      // }}
                      >
                        <p style={{ marginRight: 13 }}>Delete</p>
                        <DeleteIcon style={{ fill: 'currentcolor' }} />
                      </NoticeBtn>
                    )}
                    {/* <ModalMenu
                      onClose={() => setOpenModalDelete(false)}
                      open={openModalDelete}
                      openModalDelete={openModalDelete}
                    >
                      <ModalDelete
                        onToggleModal={onToggleModal}
                        id={_id}
                        deletePet={deletePet}
                      />
                    </ModalMenu> */}
                  </BlockBtns>
                </Thumb>
              </Card>
            )
          )}
        </CategoriesList>
      )}
    </>
  );
};
