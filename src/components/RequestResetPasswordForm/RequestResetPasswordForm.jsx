import { Formik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

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
  InfoText,
  StyledSpinner,
} from './RequestResetPasswordForm.styled';
import { requestResetSchema } from '../../schemas/authValidationSchemas';
import { Container } from 'components/Container/Container.styled';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

export const RequestResetPasswordForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    email: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const email = {
      email: values.email,
    };
    try {
      setIsLoading(true);
      await axios.patch('auth/resetpassword', email);
      toast.success(i18n.t('Reset_Password_notification_check'));
      resetForm();
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <FlexBox>
        <FormWrapper>
          <Heading>{t('Reset_Password')}</Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={requestResetSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <InfoText>{t('Reset_Password_notification')}</InfoText>
                <Label>
                  <Input
                    autoComplete="on"
                    type="email"
                    name="email"
                    placeholder={t('Email')}
                  ></Input>
                  <Error name="email" component="p"></Error>
                </Label>

                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid) || isLoading}
                >
                  {isLoading && <StyledSpinner />} {t('Reset_Password')}
                </Button>

                <Text>
                  {t('Back_to')}
                  <Link to="/login">{t('Login')}</Link>
                </Text>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FlexBox>
    </Container>
  );
};
