import { useState } from 'react';
import { SelectComponent } from './SelectComponent';
import {
  Error,
  Input,
  InputDatePicker,
  Label,
  ErrorSelect,
  WrapperBtn,
  Button,
} from './ModalAddsPet.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';
import { useTranslation } from 'react-i18next';
export const FormePageFist = ({
  formik,
  onClickToggle,
  onToggleModal,
  setStartDate,
  startDate,
}) => {
  const { t } = useTranslation();
  const [focus, setFocus] = useState(false);
  const isInput = useSelector(state => state.isInput.toggle);

  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor="">
        {t('Name_pet')}
        <Input
          type="text"
          name="name"
          placeholder={t('Name_pet_p')}
          autoFocus={true}
        />
        <Error name="name" component="p"></Error>
      </Label>
      <Label htmlFor="">
        {t('Date_of_birth')}
        <InputDatePicker
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          name="birthday"
          placeholderText="00.00.0000"
          onChange={date => {
            setStartDate(date);
            formik.setFieldValue(
              'birthday',
              date.toLocaleString().slice(0, 10)
            );
          }}
          minDate={new Date('December 17, 1900 03:24:00')}
          maxDate={new Date()}
          showDisabledMonthNavigation
          shouldCloseOnSelect={true}
        />
        <ErrorSelect>{formik.errors.birthday}</ErrorSelect>
      </Label>
      <Label htmlFor="">
        {t('Breed')}
        {!isInput ? (
          <Input type="text" name="breed" placeholder={t('Breed_p')} />
        ) : (
          <SelectComponent
            onChange={value => formik.setFieldValue('breed', value.value)}
            value={formik.values.breed}
            onFocus={setFocus}
          />
        )}
        {focus ? (
          <ErrorSelect className="error">{formik.errors.breed}</ErrorSelect>
        ) : null}
        <Error name="breed" component="p"></Error>
      </Label>
      <WrapperBtn>
        <Button
          type="button"
          onClick={() => {
            onClickToggle(false);
          }}
          disabled={!(formik.dirty && formik.isValid)}
        >
          {t('Next')}
        </Button>
        <Button
          type="button"
          onClick={e => {
            dispatch(onSelector());
            onToggleModal(e);
          }}
        >
          {t('Cancel')}
        </Button>
      </WrapperBtn>
    </>
  );
};
