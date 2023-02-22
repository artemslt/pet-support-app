import {
  Error,
  Label,
  AddImage,
  InputHidden,
  AddPhoto,
  TitleAddPhoto,
  ImgBox,
  Image,
  Comment,
  ButtonClose,
  CancelIcon,
  CommentTitle,
} from './ModalAddsPet.styled';

export const FormePageSecond = ({
  setImgUrl,
  setImgValue,
  imgValue,
  imgUrl,
}) => {
  return (
    <>
      <TitleAddPhoto> Add photo and some comments</TitleAddPhoto>
      <Label>
        <AddImage>
          {!imgValue && (
            <InputHidden
              type="file"
              name="photo"
              // disabled={imgUrl ? 'disabled' : ''}
              value={imgValue ? imgValue : ''}
            />
          )}
          <Error name="photo" component="p"></Error>
          <ImgBox className={imgUrl ? 'show_img' : ''}>
            <Image src={imgUrl} alt="" />
            <ButtonClose
              onClick={() => {
                setImgUrl(null);
                setImgValue(null);
              }}
            >
              <CancelIcon />
            </ButtonClose>
          </ImgBox>

          <AddPhoto />
        </AddImage>
      </Label>
      <Label htmlFor="">
        <CommentTitle> Comments</CommentTitle>
        <Comment
          component="textarea"
          name="comment"
          placeholder="Type comments"
        />
        <Error name="comment" component="p"></Error>
      </Label>
    </>
  );
};
