import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';
import axios from 'axios';

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
    sex: 'male',
    location: '',
    price: '',
    img: '',
    comment: '',
  };

  const [step, setStep] = useState(true);
  const [imgUrl, setImgUrl] = useState(null);
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState('');
  const dispatch = useDispatch();

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgUrl(fileReader.result);
  };

  const handleOnChange = event => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const size = file.size;

      if (Number(size) > 3000000) {
        console.log(`ERROR`);
        return toast.error(`Photo must be no larger than 2.8 megabytes`);
      }

      setFile(file);
      return fileReader.readAsDataURL(file);
    }
    return;
  };

  async function createNotice(newNotice) {
    try {
      const responce = await axios.post(
        'https://pet-support-backend-v8vc.onrender.com/api/notices/notice',
        newNotice,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      toast.success('New Notice created successfully');
      console.log(`responce`, responce);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (values, { resetForm }) => {
    const newNotice = {
      category: values.typeOfNotice,
      title: values.title,
      name: values.name,
      date: values.date,
      breed: values.breed,
      sex: values.sex,
      location: values.location,
      price: values.price,
      image: file,
      comments: values.comment,
    };

    createNotice(newNotice);
    console.log(`AddPet`, values);
    setImgUrl('');
    resetForm();
    onToggleModal();
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
        {({
          values,
          isValid,
          dirty,
          handleReset,
          setFieldValue,
          errors,
          isSubmitting,
        }) => (
          <NoticeForm onChange={handleOnChange}>
            {step ? (
              <FirstPart
                setStep={setStep}
                isValid={isValid}
                dirty={dirty}
                handleReset={handleReset}
                values={values}
                errors={errors}
                setImgUrl={setImgUrl}
                isSubmitting={isSubmitting}
                setFieldValue={setFieldValue}
                setFile={setFile}
                onToggleModal={onToggleModal}
                startDate={startDate}
                setStartDate={setStartDate}
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
