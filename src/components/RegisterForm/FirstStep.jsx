import { Field, ErrorMessage } from 'formik';

export const FirstStep = () => {
  return (
    <>
      <label>
        <Field type="text" name="email" placeholder="Email"></Field>
        <ErrorMessage name="email" component="span"></ErrorMessage>
      </label>
      <label>
        <Field
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
        ></Field>
        <ErrorMessage name="password" component="span"></ErrorMessage>
      </label>
      <label>
        <Field
          autoComplete="off"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        ></Field>
        <ErrorMessage name="confirmPassword" component="span"></ErrorMessage>
      </label>
    </>
  );
};
