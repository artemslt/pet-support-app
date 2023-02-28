import { useTranslation } from 'react-i18next';
import {
  Label,
  Input,
  Error,
  Button,
  StyledSpinner,
  MaskedPhoneInput,
} from './RegisterForm.styled';

export const SecondStep = ({ isLoading }) => {
  const { t } = useTranslation();
  const phoneNumberMask = [
    '+',
    '3',
    '8',
    '(',
    /[0-9]/,
    /\d/,
    /\d/,

    ')',

    /\d/,
    /\d/,
    /\d/,

    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  return (
    <>
      <Label>
        <Input
          autoComplete="on"
          type="text"
          name="name"
          placeholder={t('Name')}
        ></Input>
        <Error name="name" component="p"></Error>
      </Label>
      <Label>
        <Input
          autoComplete="on"
          type="text"
          name="location"
          placeholder={t('City_region')}
        ></Input>
        <Error name="location" component="p"></Error>
      </Label>
      <Label>
        <MaskedPhoneInput
          mask={phoneNumberMask}
          autoComplete="on"
          type="text"
          name="phone"
          placeholder={t('Mobile_phone')}
        ></MaskedPhoneInput>
        <Error name="phone" component="p"></Error>
      </Label>
      <Button type="submit" disabled={isLoading}>
        {isLoading && <StyledSpinner />}
        {t('Register')}
      </Button>
    </>
  );
};
