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

export const NoticeCategoryItem = () => {
  const infoItems = ['Breed:', 'Place:', 'Age:', 'Price:'];
  let isOwner = false;

  return (
    <>
      <Card>
        <div style={{ position: 'relative' }}>
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ajF9HkDKCwscfWzlkp2CEQHaHa%26pid%3DApi&f=1&ipt=f664381439bbba91375bbc89ee2fa86139639379ed6c25215ee96018debea91b&ipo=images"
            alt="pets"
          />
          <Badge>
            <CategoryTitle>sell</CategoryTitle>
          </Badge>
          <AddToFavotiteBtn>
            <FavoriteIcon />
          </AddToFavotiteBtn>
        </div>

        <Thumb>
          <NoticeTitle>Сute dog looking for a home</NoticeTitle>
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
    </>
  );
};
