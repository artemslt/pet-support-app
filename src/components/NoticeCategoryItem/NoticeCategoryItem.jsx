import { ReactComponent as FavoriteIcon } from './akar-icons_heart.svg';
import { ReactComponent as DeleteIcon } from './fluent_delete-16-filled.svg';
import {
  Card,
  Image,
  Thumb,
  Badge,
  CategoryTitle,
  AddToFavotiteBtn,
  NoticeTitle,
  Info,
  NoticeBtn,
  BlockBtns,
} from './NoticeCategoryItem.styled';

export const NoticeCategoryItem = ({ items }) => {
  // const { title, breed, category, image } = items;

  const infoItems = ['Breed:', 'Place:', 'Age:', 'Price:'];
  let isOwner = false;

  return (
    <>
      {items.map(({ title, _id, image, category }) => (
        <Card key={_id}>
          <div style={{ position: 'relative' }}>
            <Image src={image} alt="pets" />
            <Badge>
              <CategoryTitle>{category}</CategoryTitle>
            </Badge>
            <AddToFavotiteBtn>
              <FavoriteIcon />
            </AddToFavotiteBtn>
          </div>

          <Thumb>
            <NoticeTitle>{title}</NoticeTitle>
            {infoItems.map(item => (
              <Info>{item}</Info>
            ))}
            <BlockBtns>
              <NoticeBtn>Learn more</NoticeBtn>
              {isOwner ? (
                <NoticeBtn>
                  <p style={{ marginRight: 13 }}>Delete</p>
                  <DeleteIcon style={{ fill: 'currentcolor' }} />
                </NoticeBtn>
              ) : null}
            </BlockBtns>
          </Thumb>
        </Card>
      ))}
    </>
  );
};
