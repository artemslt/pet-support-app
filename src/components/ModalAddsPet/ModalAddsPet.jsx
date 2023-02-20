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
  Comment,
  ButtonClose,
  CancelIcon,
} from './ModalAddsPet.styled';

const initialValues = {
  name: '',
  date: '',
  breed: '',
  img: '',
  comment: '',
};

export const ModalAddsPet = ({ onToggleModal }) => {
  const [pageToggle, setPageToggle] = useState(true);
  const [imgValue, setImgValue] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgUrl(fileReader.result);
  };

  const handleSubmit = (values, actions) => {
    const { name, date, breed, img, comment } = values;
    if (name === '' || date === '' || breed === '') {
      return setPageToggle(true);
    }
    if (img === '' || comment === '') {
      return;
    }
    console.log(values);
    // console.log(actions);
  };
  const handleOnChange = event => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      setImgValue(event.target.value);
      const file = event.target.files[0];
      return fileReader.readAsDataURL(file);
    }
    return;
  };
  console.log(pageToggle);
  return (
    <Wrapper>
      <ButtonCloses onClick={e => onToggleModal(e)}>
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
                    {!imgValue && (
                      <InputHidden
                        type="file"
                        name="img"
                        disabled={imgUrl ? 'disabled' : ''}
                        value={imgValue ? imgValue : ''}
                      />
                    )}

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
                  <span> Comments</span>
                  <Comment
                    component="textarea"
                    name="comment"
                    placeholder="Type comments"
                  />
                </Label>
              </>
            )}

            <WrapperBtn>
              <Button
                className="active"
                type={pageToggle ? 'button' : 'button'}
                onClick={() => {
                  if (pageToggle) {
                    setPageToggle(false);
                  }
                  if (!pageToggle) {
                    setPageToggle(true);
                  }
                }}
              >
                {pageToggle ? 'Next' : 'back'}
              </Button>

              {
                <Button
                  onClick={e => {
                    if (pageToggle) {
                      onToggleModal(e);
                    }
                  }}
                  type={pageToggle ? 'button' : 'submit'}
                >
                  {pageToggle ? 'Cancel' : 'Done'}
                </Button>
              }
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
