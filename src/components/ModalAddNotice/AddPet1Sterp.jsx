import {
  Text,
  LabelTitle,
  Input,
  InputDatePicker,
  Error,
  ButtonsSection,
  Button,
  RadioBtn,
  RadioBtnLabel,
  RadioBtnGroup,
} from './ModalAddNotice.styled';

import { SelectComponentNotice } from './SelectComponentNotice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const FirstPart = ({
  setStep,
  isValid,
  dirty,
  handleReset,
  setFieldValue,
  values,
  errors,
  setImgUrl,
  setFile,
  startDate,
  setStartDate,
  onToggleModal
}) => {
  const { t } = useTranslation();
  const [focus, setFocus] = useState(false);
  const isInput = useSelector(state => state.isInput.toggle);

  function ResetValues() {
    handleReset();
    setImgUrl('');
    setFile(null);

    onToggleModal();
  }

  return (
    <>
      <Text>{t('Notice_add_pet')}</Text>

      <RadioBtnGroup role="group">
        <RadioBtn
          type="radio"
          name="typeOfNotice"
          value="lost-found"
          id="lost-found"
        />
        <RadioBtnLabel htmlFor="lost-found">
          <span>{t('lost_found')}</span>
        </RadioBtnLabel>

        <RadioBtn
          type="radio"
          name="typeOfNotice"
          value="for-free"
          id="for-free"
        />
        <RadioBtnLabel htmlFor="for-free">
          <span>{t('in_good_hands')}</span>
        </RadioBtnLabel>
        <RadioBtn
          type="radio"
          name="typeOfNotice"
          value="sell"
          id="sell"
          checked={values.typeOfNotice === 'sell'}
          onChange={() => setFieldValue('typeOfNotice', 'sell')}
        />
        <RadioBtnLabel htmlFor="sell">
          <span>{t('sell')}</span>
        </RadioBtnLabel>
      </RadioBtnGroup>

      <label>
        <LabelTitle>
          {t('Tittle_of_ad')} <span>*</span>
        </LabelTitle>
        <Input name="title" placeholder={t('Type_name')} />
        <Error name="title" component="div" />
      </label>

      <label>
        <LabelTitle>
          {t('Name_pet')} <span>*</span>
        </LabelTitle>
        <Input name="name" placeholder={t('Name_pet_p')} />
        <Error name="name" component="div" />
      </label>

      <LabelTitle>
        {t('Date_of_birth')} <span>*</span>
      </LabelTitle>
      <InputDatePicker
        selected={startDate}
        dateFormat="dd.MM.yyyy"
        name="date"
        placeholderText="00.00.0000"
        onChange={date => {
          setStartDate(date);
          if (!date) {
            return setFieldValue('date', '');
          }
          setFieldValue('date', date.toLocaleString('az-Cyrl-AZ').slice(0, 10));
        }}
        minDate={new Date('December 17, 1900 03:24:00')}
        maxDate={new Date()}
        showDisabledMonthNavigation
        shouldCloseOnSelect={true}
      />

      <label htmlFor="InputDatePicker">
        <Error name="date" component="div" />
      </label>

      <label>
        <LabelTitle>
          {t('Breed')} <span>*</span>
        </LabelTitle>

        {!isInput ? (
          <>
            <Input name="breed" placeholder={t('Breed_p')} />
            <Error name="breed" component="div" />
          </>
        ) : (
          <>
            {' '}
            <SelectComponentNotice
              onChange={value => setFieldValue('breed', value.value)}
              value={values.breed}
              onFocus={setFocus}
            />
            {focus ? <div className="error">{errors.breed}</div> : null}
          </>
        )}
      </label>

      <ButtonsSection>
        <Button
          name="next"
          disabled={!isValid || !dirty}
          onClick={() => setStep(false)}
          //   onClick={Step}
          type="button"
        >
          {t('Next')}
        </Button>
        <Button type="button" onClick={ResetValues}>
          {t('Cancel')}
        </Button>
      </ButtonsSection>
    </>
  );
};
