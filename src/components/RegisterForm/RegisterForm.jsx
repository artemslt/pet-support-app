import { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { StepSwitcher } from './StepSwitcher';
import { registerSchema } from '../../schemas/authValidationSchemas';
import { register, login } from 'redux/auth/authOperations';

export const RegisterForm = () => {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      email: values.email,
      password: values.password,
      name: values.name,
      location: values.location,
      phone: values.phone,
    };
    console.log(newUser);
    const data = dispatch(register(newUser));
    console.log(data.payload);
    if (data.payload.type === 'auth/register/fulfilled') {
      dispatch(login({ email: values.email, password: values.password }));
      resetForm();
      setPage(0);
    }
    if (!data.arg) {
      console.log('Something wrong, please try again later');
    }
  };

  const handleClick = () => {
    page === 0 ? setPage(page + 1) : setPage(page - 1);
  };

  return (
    <div>
      <h2>Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {<StepSwitcher page={page} />}
          <div>
            <button type="button" onClick={handleClick}>
              {page === 0 ? 'Next' : 'Back'}
            </button>
            {page === 1 && <button type="submit">Register</button>}
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
