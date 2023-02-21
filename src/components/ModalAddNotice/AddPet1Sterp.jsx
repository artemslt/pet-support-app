import { Field, ErrorMessage } from 'formik';

export const FirstPart = ({ setStep, isValid, dirty, handleReset }) => {
  //   console.log(`dirty`, dirty);
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur{' '}
      </p>
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
        <p>
          Tittle of ad <span>*</span>
        </p>
        <Field name="title" placeholder="Type name" />
        <ErrorMessage name="title" component="div" />
      </label>

      <label>
        <p>Name pet</p>
        <Field name="name" placeholder="Type name pet" />
        <ErrorMessage name="name" component="div" />
      </label>

      <label>
        <p>Date of birth</p>
        <Field name="date" placeholder="Type date of birth" />
        <ErrorMessage name="date" component="div" />
      </label>

      <label>
        <p>Breed</p>
        <Field name="breed" placeholder="Type breed" />
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
