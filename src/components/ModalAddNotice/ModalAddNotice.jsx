import { Formik, Form } from 'formik';
import { useState } from 'react';

import {
  appPetSchemaStep1,
  appPetSchemaStep2,
} from '../../schemas/appNoticeSchema';
import { FirstPart } from './AddPet1Sterp';
import { SecondPart } from './AddPert2Step';
import { useDispatch } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';
import {
  Wrapper,
  Title,
  ButtonCloses,
  ClosesIcon,
} from './ModalAddNotice.styled';

export const AddPet = ({ onToggleModal }) => {
  const values = {
    typeOfNotice: '',
    title: '',
    name: '',
    date: '',
    breed: '',
    sex: '',
    location: '',
    price: '0',
    img: '',
    comment: '',
  };

  // стейт для збереження юрл
  const [imgUrl, setImgUrl] = useState(null);
  const [step, setStep] = useState(true);

  // діспатч перемикає перемикач який в редаксі,
  //він потрібен для того щоб в нас вмикалася кнопка на перемикання інпута, після закриття
  //модалки потрібно ставити перемикач на місце  dispatch(onSelector()), бо селектора не буде до перезавантаження сторінки
  const dispatch = useDispatch();

  // файл рідер
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgUrl(fileReader.result);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(`AddPet`, values);
    resetForm();
  };

  const handleOnChange = event => {
    event.preventDefault();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
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

      <Title>Add pet</Title>
      <Formik
        initialValues={values}
        validationSchema={step ? appPetSchemaStep1 : appPetSchemaStep2}
        onSubmit={handleSubmit}
      >
        {({ values, isValid, dirty, errors, handleReset, setFieldValue }) => (
          <Form onChange={handleOnChange}>
            {step ? (
              <FirstPart
                setStep={setStep}
                isValid={isValid}
                dirty={dirty}
                handleReset={handleReset}
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
              />
            ) : (
              <SecondPart
                setStep={setStep}
                values={values}
                isValid={isValid}
                dirty={dirty}
                setFieldValue={setFieldValue}
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
              />
            )}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
