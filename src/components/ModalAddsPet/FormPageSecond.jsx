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
  WrapperBtn,
  CommentTitle,
  Button,
} from './ModalAddsPet.styled';

export const FormePageSecond = ({
  setImgUrl,
  imgUrl,
  onClickToggle,
  setFile,
  formik,
}) => {
  console.log('====================================');
  console.log(Formik);
  console.log('====================================');
  return (
    <>
      <TitleAddPhoto> Add photo and some comments</TitleAddPhoto>
      <Label>
        <AddImage className={!imgUrl ? 'Add_Image_show' : ''}>
          {!imgUrl && (
            <InputHidden
              type="file"
              name="photo"
              value={imgUrl ? imgUrl : ''}
              accept="image/png, image/jpeg"
            />
          )}
          <ImgBox className={imgUrl ? 'show_img' : ''}>
            <Image src={imgUrl} alt="" />
          </ImgBox>
          <AddPhoto />
          <Error name="photo" component="p"></Error>
        </AddImage>

        <ButtonClose
          type="button"
          onClick={() => {
            setImgUrl(null);
            setFile(null);
          }}
          className={imgUrl ? 'button_closse__show' : ''}
        >
          <CancelIcon />
        </ButtonClose>
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
      <WrapperBtn>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={() => onClickToggle(true)}>
          Back
        </Button>
      </WrapperBtn>
    </>
  );
};
