import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { parse, isDate } from 'date-fns';

import { FirstPart } from './AddPet1Sterp';
import { SecondPart } from './AddPert2Step';

// перевірка дати
const today = new Date();
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'dd.MM.yyyy', new Date());

  return parsedDate;
}

let appPetSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, 'Title should be 3 characters minimum.')
    .max(30, 'Title should be 30 characters maximum.')
    .required(),
  name: yup
    .string()
    .min(3, 'Name should be 3 characters minimum.')
    .max(15, 'Name should be 15 characters maximum.')
    .required(),
  date: yup
    .date('Date must be in format dd.MM.yyyy')
    .transform(parseDateString)
    .max(today)
    .required(),
  breed: yup.string().required(),
  sex: yup.string().required(),

  male: yup.string(),
  female: yup.string(),

  location: yup
    .string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g,
      'Location can only contain Latin letters.'
    )
    .required(),
  price: yup.string().required(),
  img: yup.string().required(),
  comment: yup
    .string()
    .min(10, 'Comment should be 10 characters minimum.')
    .max(100, 'Comment should be 30 characters maximum.')
    .required(),
});

export const AddPet = () => {
  const values = {
    title: '',
    name: '',
    date: '',
    breed: '',
    sex: '',
    location: '',
    price: '',
    img: '',
    comment: '',
  };
  //   //   в окрему функцію
  //   const btn = document.getElementsByName('next');
  //   btn.disabled = true;

  //   const validInputs = () => {
  //     // зробити перевірку - якщо поля валідні, то кнопка активна
  //     btn.disabled = false;
  //   };

  const [step, setStep] = useState(true);

  const handleSubmit = (values, { resetForm }) => {
    console.log(`AddPet`, values);
    resetForm();
  };

  return (
    <>
      <button type="button">lost/found</button>
      <button type="button">in good hands</button>
      <button type="button">sell</button>

      <Formik
        initialValues={values}
        validationSchema={appPetSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            {step ? (
              <FirstPart setStep={setStep} />
            ) : (
              <SecondPart setStep={setStep} values={values} />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
