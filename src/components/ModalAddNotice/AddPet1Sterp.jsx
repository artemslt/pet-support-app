import { Field, ErrorMessage } from 'formik';

export const FirstPart = ({ setStep }) => {
  return (
    <>
      <Field name="title" placeholder="Type name" />
      <ErrorMessage name="title" component="div" />

      <Field name="name" placeholder="Type name pet" />
      <ErrorMessage name="name" component="div" />

      <Field name="date" placeholder="Type date of birth" />
      <ErrorMessage name="date" component="div" />

      <Field name="breed" placeholder="Type breed" />
      <ErrorMessage name="breed" component="div" />

      <button type="button">Cancel</button>
      <button name="next" onClick={() => setStep(false)} type="button">
        Next
      </button>
    </>
  );
};
