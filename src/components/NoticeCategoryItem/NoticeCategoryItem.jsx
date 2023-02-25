import { ReactComponent as FavoriteIcon } from './akar-icons_heart.svg';
import { ReactComponent as DeleteIcon } from './fluent_delete-16-filled.svg';
import { useSelector } from 'react-redux';
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

export const NoticeCategoryItem = ({ items }) => {
  const { email } = useSelector(selectUser);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase().trim();

  const filteredNotices = items.filter(item =>
    item.title.toLowerCase().includes(normalizedFilter)
  );

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
              <AddToFavotiteBtn>
                <FavoriteIcon />
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
                {owner.email === email && (
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
