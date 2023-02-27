import { Formik } from 'formik';
import { toast } from 'react-toastify';
import axios from 'axios';

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
} from './RequestResetPasswordForm.styled';
import { requestResetSchema } from '../../schemas/authValidationSchemas';
import { Container } from 'components/Container/Container.styled';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

export const RequestResetPasswordForm = () => {
  const initialValues = {
    email: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const email = {
      email: values.email,
    };
    try {
      const data = await axios.patch('auth/resetpassword', email);
      toast.success(
        'Received your request, please check your email and follow the link to reset password'
      );
      if (data.type === 'auth/resetpassword/fulfilled') {
        resetForm();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Container>
      <FlexBox>
        <FormWrapper>
          <Heading>Reset Password</Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={requestResetSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form>
                <InfoText>
                  Please enter your email address and we will send you an email
                  to reset your password.
                </InfoText>
                <Label>
                  <Input
                    autoComplete="on"
                    type="email"
                    name="email"
                    placeholder="Email"
                  ></Input>
                  <Error name="email" component="p"></Error>
                </Label>

                <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  Request reset password
                </Button>

                <Text>
                  Back to <Link to="/login">Login</Link>
                </Text>
              </Form>
            )}
          </Formik>
        </FormWrapper>
      </FlexBox>
    </Container>
  );
};
