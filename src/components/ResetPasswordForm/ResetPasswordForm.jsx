import { Formik } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

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
} from './ResetPasswordForm.styled';
import { resetPassword } from 'redux/auth/authOperations';
import { resetPasswordSchema } from '../../schemas/authValidationSchemas';
import { Container } from 'components/Container/Container.styled';
import { ReactComponent as EyeIcon } from '../../images/eye.svg';
import { ReactComponent as EyeClosedIcon } from '../../images/eye-slash.svg';
import i18n from 'i18n';
import { useTranslation } from 'react-i18next';

export const ResetPasswordForm = () => {
  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { resetToken } = useParams();

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const newPassword = {
      password: values.password,
      resetToken,
    };
    try {
      const data = await dispatch(resetPassword(newPassword));
      if (data.type === 'auth/resetpassword/fulfilled') {
        resetForm();
      }
    } catch (error) {
      toast.error(i18n.t('t_login_1'));
    }
  };

  return (
    <Container>
      <FlexBox>
        <FormWrapper>
          <Heading>{t('Reset_Password')}</Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={resetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <Label>
                  <Input
                    autoComplete="on"
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
                <Label>
                  <Input
                    autoComplete="off"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder={t('Confirm_Password')}
                  ></Input>
                  <Error name="confirmPassword" component="p"></Error>
                  <IconButton
                    type="button"
                    onClick={() => {
                      setShowConfirmPassword(prevState => !prevState);
                    }}
                  >
                    {showConfirmPassword ? <EyeClosedIcon /> : <EyeIcon />}
                  </IconButton>
                </Label>
                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  {t('Reset_Password')}
                </Button>

                <Text>
                  {t('Back_to')} <Link to="/login">{t('Login')}</Link>
                </Text>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FlexBox>
    </Container>
  );
};
