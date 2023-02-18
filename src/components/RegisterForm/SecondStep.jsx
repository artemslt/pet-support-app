import { Field, ErrorMessage } from 'formik';

export const SecondStep = () => {
  return (
    <>
      <label>
        <Field
          autoComplete="on"
          type="text"
          name="name"
          placeholder="Name"
        ></Field>
        <ErrorMessage name="name" component="span"></ErrorMessage>
      </label>
      <label>
        <Field
          autoComplete="on"
          type="text"
          name="location"
          placeholder="City, region"
        ></Field>
        <ErrorMessage name="location" component="span"></ErrorMessage>
      </label>
      <label>
        <Field
          autoComplete="on"
          type="text"
          name="phone"
          placeholder="Mobile phone"
        ></Field>
        <ErrorMessage name="phone" component="span"></ErrorMessage>
      </label>
    </>
  );
};
