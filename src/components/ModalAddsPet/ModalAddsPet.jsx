import { Formik } from 'formik';
import { useState } from 'react';
import {
  Wrapper,
  ButtonCloses,
  ClosesIcon,
  Title,
  FormStyled,
} from './ModalAddsPet.styled';
import { FormePageFist } from './FormPageFirst';
import { FormePageSecond } from './FormPageSecond';
import { AddPetSchemaPageOne, AddPetSchemaPageTwo } from 'schemas/addPetSchema';
import { useDispatch } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';
import { addPet } from 'redux/pets/petsOperations';

const initialValues = {
  name: '',
  birthday: '',
  breed: '',
  photo: '',
  comment: '',
};

export const ModalAddsPet = ({ onToggleModal }) => {
  const [pageToggle, setPageToggle] = useState(true);
  const [imgUrl, setImgUrl] = useState(null);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgUrl(fileReader.result);
  };

  const handleSubmit = (values, actions) => {
    const { name, birthday, breed, comment } = values;

    if (!name || !birthday || !breed || !comment) {
      return;
    }

    const userPet = {
      name,
      birthday,
      breed,
      photo: file,
      comment,
    };

    dispatch(addPet(userPet));
    actions.resetForm();

    setImgUrl(null);
    dispatch(onSelector());
    onToggleModal();
  };
  const handleOnChange = event => {
    event.preventDefault();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);
      return fileReader.readAsDataURL(file);
    }
    return;
  };

  return (
    <Wrapper>
      <ButtonCloses
        onClick={e => {
          onToggleModal(e);
          dispatch(onSelector());
        }}
      >
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
            return (
              <FormStyled onChange={handleOnChange}>
                {pageToggle ? (
                  <FormePageFist
                    formik={Formik}
                    onClickToggle={setPageToggle}
                    onToggleModal={onToggleModal}
                  />
                ) : (
                  <FormePageSecond
                    setImgUrl={setImgUrl}
                    imgUrl={imgUrl}
                    onClickToggle={setPageToggle}
                  />
                )}
              </FormStyled>
            );
          }}
        </Formik>
      </div>
    </Wrapper>
  );
};
