import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { loginSchema } from '../../schemas/authValidationSchemas';
import { login } from 'redux/auth/authOperations';
import {
  FlexBox,
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
import { Container } from 'components/Container/Container.styled';
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
    const currentUser = {
      email: values.email,
      password: values.password,
    };
    try {
      const data = await dispatch(login(currentUser));
      if (data.type === 'auth/login/fulfilled') {
        resetForm();
      }
    } catch (error) {
      toast.error('Something wrong, please try again later');
    }
  };
  return (
   <Container>
    <FlexBox>
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
              type={showPassword ? 'text' : 'password'}
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
              {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
            </IconButton>
          </Label>
          <Button type="submit">Login</Button>
          <Text>
            Don't have an account? <Link to="/register">Register</Link>
          </Text>
        </Form>
      </Formik>
    </FormWrapper>
    </FlexBox>
   </Container>
  );
};
