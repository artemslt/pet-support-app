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
  ErrorToastIcon,
  SuccessToastIcon,
} from 'components/ToastIcon/ToastIcon.styled';

import {
  Wrapper,
  Title,
  ButtonClose,
  ClosesIcon,
  NoticeForm,
} from './ModalAddNotice.styled';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

export const AddPet = ({ onToggleModal }) => {
  const { t } = useTranslation();

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
  const [startDate, setStartDate] = useState();
  const dispatch = useDispatch();

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImgUrl(fileReader.result);
  };

  const handleOnChange = event => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const size = file.size;

      if (Number(size) > 5000000) {
        return toast.error(
          i18n.t('t_photo')`Photo must be no larger than 2.8 megabytes`,
          { icon: <ErrorToastIcon /> }
        );
      }

      setFile(file);
      return fileReader.readAsDataURL(file);
    }
    return;
  };

  async function createNotice(newNotice) {
    try {
      await axios.post(
        'https://pet-support-backend-v8vc.onrender.com/api/notices/notice',
        newNotice,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      toast.success(i18n.t('new_notice_create'), {
        icon: <SuccessToastIcon />,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (values, { resetForm }) => {
    if (file === null) {
      return toast.error(i18n.t('all_field'), { icon: <ErrorToastIcon /> });
    }

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

      <Title>{t('Add_pet')}</Title>
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
                setFile={setFile}
              />
            )}
          </NoticeForm>
        )}
      </Formik>
    </Wrapper>
  );
};
