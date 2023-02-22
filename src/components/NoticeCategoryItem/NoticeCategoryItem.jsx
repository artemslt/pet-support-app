import { Card, Image, Thumb } from './NoticeCategoryItem.styled';

export const NoticeCategoryItem = () => {
  return (
    <>
      <Card>
        <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ajF9HkDKCwscfWzlkp2CEQHaHa%26pid%3DApi&f=1&ipt=f664381439bbba91375bbc89ee2fa86139639379ed6c25215ee96018debea91b&ipo=images"
          alt="pets"
        />
        <Thumb>
          <h2>Title about pets</h2>
          <p>Breed:</p>
          <p>Place:</p>
          <p>Age:</p>
          <button>Learn more</button>
        </Thumb>
      </Card>
    </>
  );
};
