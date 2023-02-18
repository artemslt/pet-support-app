import { Formik } from 'formik';

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
} from './LoginForm.styled';

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
              type="password"
              name="password"
              placeholder="Password"
            ></Input>
            <Error name="password" component="p"></Error>
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
