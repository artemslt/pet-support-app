import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { loginSchema } from '../../schemas/authValidationSchemas';
import { login, gLogin } from 'redux/auth/authOperations';
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
  ButtonText,
} from './LoginForm.styled';
import { Container } from 'components/Container/Container.styled';
import { ReactComponent as EyeIcon } from '../../images/eye.svg';
import { ReactComponent as EyeClosedIcon } from '../../images/eye-slash.svg';
import { ReactComponent as GoogleIcon } from '../../images/google-icon.svg';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

export const LoginForm = () => {
  const { t } = useTranslation();
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
      toast.error(i18n.t('t_login_1'));
    }
  };
  const onSuccess = async response => {
    try {
      const googleUser = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`
      );

      const { email, name } = googleUser.data;
      const accessToken = response.access_token;

      await dispatch(gLogin({ email, name, accessToken }));
    } catch (error) {
      toast.error(i18n.t('t_login_2')` - ${error}`);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess,
    onError: error => toast.error(i18n.t('t_login_2')` - ${error}`),
  });

  return (
    <Container>
      <FlexBox>
        <FormWrapper>
          <Heading>{t('Login')}</Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <Label>
                  <Input
                    autoComplete="on"
                    type="email"
                    name="email"
                    placeholder={t('Email')}
                  ></Input>
                  <Error name="email" component="p"></Error>
                </Label>
                <Label>
                  <Input
                    autoComplete="off"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder={t('Password')}
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
                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  {t('Login')}
                </Button>
                <Button type="button" onClick={googleLogin}>
                  <GoogleIcon />
                  <ButtonText>{t('Login_with_Google')}</ButtonText>
                </Button>
                <Text>
                  {t('No_account')} <Link to="/register">{t('Register')}</Link>
                </Text>
                <Text>
                  {t('Forgot_password')} <Link to="/requestreset">{t('Reset')}</Link>
                </Text>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FlexBox>
    </Container>
  );
};
