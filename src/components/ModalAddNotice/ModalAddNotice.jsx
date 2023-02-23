import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';

import {
  appPetSchemaStep1,
  appPetSchemaStep2,
} from '../../schemas/appNoticeSchema';
import { FirstPart } from './AddPet1Sterp';
import { SecondPart } from './AddPert2Step';

import {
  Wrapper,
  Title,
  ButtonClose,
  ClosesIcon,
  NoticeForm,
} from './ModalAddNotice.styled';

export const AddPet = ({ onToggleModal }) => {
  const values = {
    typeOfNotice: 'sell',
    title: '',
    name: '',
    date: '',
    breed: '',
    sex: 'Male',
    location: '',
    price: '',
    img: '',
    comment: '',
  };

 
  const [step, setStep] = useState(true);

   // стейт для збереження юрл
 const [imgUrl, setImgUrl] = useState(null);
 
 // діспатч перемикає перемикач який в редаксі,
  //він потрібен для того щоб в нас вмикалася кнопка на перемикання інпута, після закриття
  //модалки потрібно ставити перемикач на місце  dispatch(onSelector()), бо селектора не буде до перезавантаження сторінки
  const dispatch = useDispatch();

  // файл рідер
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgUrl(fileReader.result);
  };

  const handleOnChange = event => {
    event.preventDefault();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      return fileReader.readAsDataURL(file);
    }
    return;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(`AddPet`, values);
    resetForm();
  };

  return (
    <Wrapper>
      <ButtonClose
        onClick={e => {
          onToggleModal(e);
          dispatch(onSelector());
        }}
      >
        <ClosesIcon />
      </ButtonClose>

      <Title>Add pet</Title>
      <Formik
        initialValues={values}
        validationSchema={step ? appPetSchemaStep1 : appPetSchemaStep2}
        onSubmit={handleSubmit}
      
      >
        {({ values, isValid, dirty, handleReset,setFieldValue, errors }) => (
          <NoticeForm onChange={handleOnChange}>
            {step ? (
              <FirstPart
                setStep={setStep}
                isValid={isValid}
                dirty={dirty}
                handleReset={handleReset}
                values={values}
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
          </NoticeForm>
        )}
      </Formik>
    </Wrapper>
  );
};
