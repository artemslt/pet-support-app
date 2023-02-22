import { Field, ErrorMessage } from 'formik';
import {Text, LabelTitle, Input} from './ModalAddNotice.styled'

export const FirstPart = ({ setStep, isValid, dirty, handleReset }) => {
  //   console.log(`dirty`, dirty);
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur{' '}
      </Text>
      <div role="group">
        <label>
          <Field type="radio" name="typeOfNotice" value="lost/found" />
          lost/found
        </label>
        <label>
          <Field type="radio" name="typeOfNotice" value="in good hands" />
          in good hands
        </label>
        <label>
          <Field type="radio" name="typeOfNotice" value="sell" />
          sell
        </label>
      </div>

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
        <Input name="breed" placeholder="Type breed" />
        <ErrorMessage name="breed" component="div" />
      </label>

      <button type="button" onClick={handleReset}>
        Cancel
      </button>
      <button
        name="next"
        disabled={!isValid || !dirty}
        onClick={() => setStep(false)}
        type="button"
      >
        Next
      </button>
    </>
  );
};
