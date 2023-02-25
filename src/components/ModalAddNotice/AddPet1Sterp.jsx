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
  onToggleModal
}) => {
  const [focus, setFocus] = useState(false);
  const isInput = useSelector(state => state.isInput.toggle);
  const [startDate, setStartDate] = useState(null);

  function ResetValues() {
    handleReset();
    setImgUrl('');
    setFile(null);
    
    onToggleModal()

  }

  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur{' '}
      </Text>
      <RadioBtnGroup role="group">
        <RadioBtn
          type="radio"
          name="typeOfNotice"
          value="lost/found"
          id="lost_found"
        />
        <RadioBtnLabel htmlFor="lost_found">
          <span>lost/found</span>
        </RadioBtnLabel>

        <RadioBtn
          type="radio"
          name="typeOfNotice"
          value="in good hands"
          id="in_good_hands"
        />
        <RadioBtnLabel htmlFor="in_good_hands">
          <span>in good hands</span>
        </RadioBtnLabel>
        <RadioBtn type="radio" name="typeOfNotice" value="sell" id="sell" />
        <RadioBtnLabel htmlFor="sell">
          <span>sell</span>
        </RadioBtnLabel>
      </RadioBtnGroup>

      <label>
        <LabelTitle>
          Tittle of ad <span>*</span>
        </LabelTitle>
        <Input name="title" placeholder="Type name" />
        <Error name="title" component="div" />
      </label>

      <label>
        <LabelTitle>
          Name pet <span>*</span>
        </LabelTitle>
        <Input name="name" placeholder="Type name pet" />
        <Error name="name" component="div"  />
      </label>

      <label>
        <LabelTitle>
          Date of birth <span>*</span>
        </LabelTitle>
        <InputDatePicker
          selected={startDate}
          dateFormat="dd.MM.yyyy"
          name="date"
          placeholderText={'00.00.0000'}
          onChange={date => {
            setStartDate(date);
            setFieldValue(
              'date',
              date.toLocaleString().slice(0, 10)
            );
          }}
          minDate={new Date('December 17, 1900 03:24:00')}
          maxDate={new Date()}
          showDisabledMonthNavigation
          shouldCloseOnSelect={true}
        />
        {/* <Input name="date" placeholder="Type date of birth" /> */}
        <Error name="date" component="div" />
      </label>

      <label>
        <LabelTitle>
          Breed <span>*</span>
        </LabelTitle>
        
        {!isInput ? (
          <>
            <Input name="breed" placeholder="Type breed" />
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
          Next
        </Button>
        <Button type="button" onClick={ResetValues}>
          Cancel
        </Button>
      </ButtonsSection>
    </>
  );
};
