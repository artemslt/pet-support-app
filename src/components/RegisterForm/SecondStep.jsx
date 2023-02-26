import { useTranslation } from 'react-i18next';
import { Label, Input, Error, Button } from './RegisterForm.styled';

export const SecondStep = ({ page, setPage }) => {
  const { t } = useTranslation();
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
        <Input
          autoComplete="on"
          type="text"
          name="phone"
          placeholder={t('Mobile_phone')}
        ></Input>
        <Error name="phone" component="p"></Error>
      </Label>
      <Button type="submit">{t('Register')}</Button>
    </>
  );
};
