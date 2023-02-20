import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { StepSwitcher } from './StepSwitcher';
import { registerSchema } from '../../schemas/authValidationSchemas';
import { register, login } from 'redux/auth/authOperations';
import {
  FlexBox,
  FormWrapper,
  Heading,
  Form,
  Text,
  Link,
  Button,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [page, setPage] = useState('0');

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      email: values.email,
      password: values.password,
      name: values.name,
      location: values.location,
      phone: values.phone,
    };
    console.log(newUser);
    try {
      const data = await dispatch(register(newUser));
      console.log(data);
      if (data.type === 'auth/register/fulfilled') {
        await dispatch(
          login({ email: values.email, password: values.password })
        );
        resetForm();
        setPage('0');
      }
    } catch (error) {
      toast.error(`Something wrong - ${error.response.data.message}`);
    }
  };

  return (
    <FlexBox type={page}>
      <FormWrapper type={page}>
        <Heading>Registration</Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form>
              {<StepSwitcher page={page} setPage={setPage} />}
              {page === '0' && (
                <Button
                  type="button"
                  disabled={!(formik.dirty && formik.isValid)}
                  onClick={() => setPage('1')}
                >
                  Next
                </Button>
              )}
              <Text>
                Already have an account? <Link to="/login">Login</Link>
              </Text>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FlexBox>
  );
};
