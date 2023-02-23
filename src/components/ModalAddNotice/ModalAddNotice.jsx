import { Formik, Form } from 'formik';
import { useState } from 'react';

import {
  appPetSchemaStep1,
  appPetSchemaStep2,
} from '../../schemas/appNoticeSchema';
import { FirstPart } from './AddPet1Sterp';
import { SecondPart } from './AddPert2Step';

import { Wrapper,  Title, ButtonCloses,ClosesIcon} from './ModalAddNotice.styled';


export const AddPet = () => {
  const values = {
    typeOfNotice: 'sell',
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

  const [step, setStep] = useState(true);

  const handleSubmit = (values, { resetForm }) => {
    console.log(`AddPet`, values);
    resetForm();
  };

  return (
    <Wrapper>
      <ButtonCloses onClick={e => console.log(e)}>
        <ClosesIcon />
      </ButtonCloses>

      <Title>Add pet</Title>
      <Formik
        initialValues={values}
        validationSchema={step ? appPetSchemaStep1 : appPetSchemaStep2}
        onSubmit={handleSubmit}
      >
        {({ values, isValid, dirty, handleReset, setFieldValue, errors }) => (
          <Form>
            {step ? (
              <FirstPart
                setStep={setStep}
                isValid={isValid}
                dirty={dirty}
                handleReset={handleReset}

                setFieldValue={setFieldValue}
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
              />
            )}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
