import { Formik } from 'formik';

import { useState } from 'react';
import {
  Wrapper,
  ButtonCloses,
  ClosesIcon,
  Title,
  WrapperBtn,
  FormStyled,
  Button,
} from './ModalAddsPet.styled';

import { FormePageFist } from './FormPageFirst';
import { FormePageSecond } from './FormPageSecond';

import { AddPetSchemaPageOne, AddPetSchemaPageTwo } from 'schemas/addPetSchema';

const initialValues = {
  name: '',
  birthday: '',
  breed: '',
  photo: '',
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
    const { name, birthday, breed, photo, comment } = values;

    if (!name || !birthday || !breed || !photo || !comment) {
      return;
    }
  
    actions.resetForm();
    setImgValue(null);
    setImgUrl(null);
    onToggleModal();
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

  return (
    <Wrapper>
      <ButtonCloses onClick={e => onToggleModal(e)}>
        <ClosesIcon />
      </ButtonCloses>
      <div>
        <Title>Add pet</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={
            pageToggle ? AddPetSchemaPageOne : AddPetSchemaPageTwo
          }
        >
          {Formik => {
            const ValidNextPage = () => {
              const { name, birthday, breed } = Formik.values;
              if (!name || !birthday || !breed) {
                return true;
              }

              if (Formik.isValid) {
                if (Formik.dirty) {
                  return false;
                }
                return false;
              }
              return true;
            };
            const isValid = ValidNextPage();

            return (
              <FormStyled onChange={handleOnChange}>
                {pageToggle ? (
                  <FormePageFist />
                ) : (
                  <FormePageSecond
                    setImgUrl={setImgUrl}
                    setImgValue={setImgValue}
                    imgValue={imgValue}
                    imgUrl={imgUrl}
                  />
                )}
                <WrapperBtn>
                  <Button
                    className="active"
                    type={Formik.isValid ? 'submit' : 'button'}
                    disabled={isValid}
                    onClick={() => {
                      if (pageToggle) {
                        setPageToggle(false);
                      }
                      if (!pageToggle) {
                        return;
                      }
                    }}
                  >
                    {pageToggle ? 'Next' : 'Done'}
                  </Button>

                  {
                    <Button
                      onClick={e => {
                        if (pageToggle) {
                          onToggleModal(e);
                        }
                        if (!pageToggle) {
                          setPageToggle(true);
                        }
                      }}
                      type={pageToggle ? 'button' : 'submit'}
                    >
                      {pageToggle ? 'Cancel' : 'back'}
                    </Button>
                  }
                </WrapperBtn>
              </FormStyled>
            );
          }}
        </Formik>
      </div>
    </Wrapper>
  );
};
