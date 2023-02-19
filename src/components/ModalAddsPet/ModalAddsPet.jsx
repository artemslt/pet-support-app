import { Formik } from 'formik';
import { FormEvent } from 'react';
import { useState } from 'react';
import {
  Wrapper,
  ButtonCloses,
  ClosesIcon,
  Title,
  WrapperBtn,
  Input,
  FormStyled,
  Label,
  Button,
  AddImage,
  InputHidden,
  AddPhoto,
  FileBox,
  TitleAddPhoto,
  ImgBox,
  Image,
  Comments,
  ButtonClose,
  CancelIcon,
} from './ModalAddsPet.styled';

const initialValues = {
  name: '',
  date: '',
  breed: '',
  img: '',
  comments: '',
};

export const ModalAddsPet = ({ onToggle }) => {
  const [pageToggle, setPageToggle] = useState(true);
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgUrl(fileReader.result);
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };

  const handleOnChange = event => {
    event.preventDefault();
    const { img } = event.currentTarget;

    if (img) {
      const file = img.files[0];
      setImg(file);
      fileReader.readAsDataURL(file);
    }
    return;
  };
  console.log(imgUrl);
  return (
    <Wrapper>
      <ButtonCloses onClick={e => onToggle(e)}>
        <ClosesIcon />
      </ButtonCloses>
      <div>
        <Title>Add pet</Title>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormStyled onChange={handleOnChange}>
            {pageToggle ? (
              <>
                <Label htmlFor="">
                  Name pet
                  <Input type="text" name="name" placeholder="Type name pet" />
                </Label>
                <Label htmlFor="">
                  Date of birth
                  <Input
                    type="text"
                    name="date"
                    placeholder="Type date of birth"
                  />
                </Label>
                <Label htmlFor="">
                  Breed
                  <Input type="text" name="breed" placeholder="Type breed" />
                </Label>
              </>
            ) : (
              <>
                <TitleAddPhoto> Add photo and some comments</TitleAddPhoto>
                <Label>
                  <AddImage>
                    <InputHidden
                      type="file"
                      name="img"
                      disabled={imgUrl ? 'disabled' : ''}
                    />

                    <ImgBox className={imgUrl ? 'show_img' : ''}>
                      <Image src={imgUrl} alt="" />
                      <ButtonClose
                        onClick={() => {
                          setImgUrl(null);
                          setImgUrl(null);
                        }}
                      >
                        <CancelIcon />
                      </ButtonClose>
                    </ImgBox>

                    <AddPhoto />
                  </AddImage>
                </Label>

                <Label htmlFor="">
                  <span> Comments</span>
                  <Comments
                    type="text"
                    name="comment"
                    placeholder="Type comments"
                  />
                </Label>
              </>
            )}

            <WrapperBtn>
              {!pageToggle ? (
                <Button type="submit" className="active">
                  Done
                </Button>
              ) : (
                <Button
                  onClick={() => setPageToggle(false)}
                  type="button"
                  className="active"
                >
                  Next
                </Button>
              )}
              {pageToggle ? (
                <Button onClick={e => onToggle(e)} type="button">
                  Cancel
                </Button>
              ) : (
                <Button onClick={() => setPageToggle(true)} type="button">
                  back
                </Button>
              )}
            </WrapperBtn>
          </FormStyled>
        </Formik>
      </div>
    </Wrapper>
  );
};

// {!PageToggle ? (
//     <Formik>
//       <FormStyled>
//         <Label htmlFor="">
//           Name pet
//           <Input type="text" name="name" placeholder="Type name pet" />
//         </Label>
//         <Label htmlFor="">
//           Date of birth
//           <Input
//             type="text"
//             name="date"
//             placeholder="Type date of birth"
//           />
//         </Label>
//         <Label htmlFor="">
//           Breed
//           <Input type="text" name="breed" placeholder="Type breed" />
//         </Label>
//         <button onClick={onPageToggle} type="button">
//           Next
//         </button>
//         <button onClick={e => onToggle(e)} type="button">
//           Cancel
//         </button>
//       </FormStyled>
//     </Formik>
//   ) : (
//     <Formik>
//       <Formik>
//         <Label htmlFor="">
//           Add photo and some comments
//           <Input type="file" name="name" accept="image/*, .png,.jpg" />
//         </Label>
//         <Label htmlFor="">
//           Comments
//           <Input type="text" name="date" placeholder="Type comments" />
//         </Label>
//         <button onClick={onPageToggle} type="button">
//           Next
//         </button>
//         <button onClick={e => onToggle(e)} type="button">
//           Cancel
//         </button>
//       </Formik>
//     </Formik>
//   )}
