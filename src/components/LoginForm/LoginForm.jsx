import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginSchema } from '../../schemas/authValidationSchemas';
import { login } from 'redux/auth/authOperations';
import {
  FormWrapper,
  Heading,
  Form,
  Input,
  Label,
  Button,
  Text,
  Error,
  Link,
  IconButton,
} from './LoginForm.styled';
import { ReactComponent as EyeIcon } from '../../images/eye.svg';
import { ReactComponent as EyeClosedIcon } from '../../images/eye-slash.svg';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    console.log(user);
    try {
      const data = await dispatch(login(user));
      console.log(data);
      if (data.type === 'auth/login/fulfilled') {
        resetForm();
      }
    } catch (error) {
      console.log('Something wrong, please try again later');
    }
  };
  return (
    <FormWrapper>
      <Heading>Login</Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label>
            <Input
              autoComplete="on"
              type="email"
              name="email"
              placeholder="Email"
            ></Input>
            <Error name="email" component="p"></Error>
          </Label>
          <Label>
            <Input
              autoComplete="off"
              type={showPassword ? 'password' : 'text'}
              name="password"
              placeholder="Password"
            ></Input>
            <Error name="password" component="p"></Error>
            <IconButton
              type="button"
              onClick={() => {
                setShowPassword(prevState => !prevState);
              }}
            >
              {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
            </IconButton>
          </Label>
          <Button type="submit">Login</Button>
          <Text>
            Don't have an account? <Link to="/register">Register</Link>
          </Text>
        </Form>
      </Formik>
    </FormWrapper>
  );
};
