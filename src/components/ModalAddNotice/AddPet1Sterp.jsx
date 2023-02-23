import { ErrorMessage } from 'formik';
import {
  Text,
  LabelTitle,
  Input,
  ButtonsSection,
  Button,
  RadioBtn,
  RadioBtnLabel,
  RadioBtnGroup,
} from './ModalAddNotice.styled';

// Oleksii
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
}) => {

  const [focus, setFocus] = useState(false);
  const isInput = useSelector(state => state.isInput.toggle);
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
        <ErrorMessage name="title" component="div" />
      </label>

      <label>
        <LabelTitle>Name pet</LabelTitle>
        <Input name="name" placeholder="Type name pet" />
        <ErrorMessage name="name" component="div" />
      </label>

      <label>
        <LabelTitle>Date of birth</LabelTitle>
        <Input name="date" placeholder="Type date of birth" />
        <ErrorMessage name="date" component="div" />
      </label>

      <label>
        <LabelTitle>Breed</LabelTitle>
        {/* <Input name="breed" placeholder="Type breed" />
        <ErrorMessage name="breed" component="div" /> */}

        {/* Oleksii */}
        {!isInput ? (
          <>
            <Input name="breed" placeholder="Type breed" />
            <ErrorMessage name="breed" component="div" />
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
          type="button"
        >
          Next
        </Button>
        <Button type="button" onClick={handleReset}>
          Cancel
        </Button>
      </ButtonsSection>
    </>
  );
};
