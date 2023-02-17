import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginSchema } from '../../schemas/authValidationSchemas';
import { login } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    console.log(user);
    const data = dispatch(login(user));
    if (data.type === 'auth/login/fulfilled') {
      resetForm();
    }
    if (!data.payload) {
      console.log('Something wrong, please try again later');
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <Field type="email" name="email" placeholder="Email"></Field>
            <ErrorMessage name="email" component="span"></ErrorMessage>
          </label>
          <label>
            <Field
              type="password"
              name="password"
              placeholder="Password"
            ></Field>
            <ErrorMessage name="password" component="span"></ErrorMessage>
          </label>
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
