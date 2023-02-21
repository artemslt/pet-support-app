import { Field, ErrorMessage } from 'formik';

export const SecondPart = ({
  setStep,
  values,
  isValid,
  dirty,
  setFieldValue,
}) => {
  return (
    <div>
      <label htmlFor="">
        <p>
          The sex<span>*</span>:
        </p>
        <div role="group">
          <label>
            <Field type="radio" name="sex" value="Male" />
            Male
          </label>
          <label>
            <Field type="radio" name="sex" value="Female" />
            Female
          </label>
        </div>

        <ErrorMessage name="sex" component="div" />
      </label>

      <label>
        <p>
          Location<span>*</span>:
        </p>

        <Field name="location" placeholder="Type location" />
        <ErrorMessage name="location" component="div" />
      </label>

      {values.typeOfNotice === 'sell' && (
        <>
          <label>
            <p>
              Price<span>*</span>:
            </p>
            <Field name="price" placeholder="Type price" />
            <ErrorMessage name="price" component="div" />
          </label>
        </>
      )}
      <label>
        <p>Load the pet’s image:</p>
        <Field name="img" type="file" accept="image/*" />
        <ErrorMessage name="img" component="div" />
      </label>

      <label>
        <p>Comments</p>
        <Field
          as="textarea"
          name="comment"
          placeholder="Type comment"
          onChange={e => setFieldValue('img', e.currentTarget.files[0])}
        />
        <ErrorMessage name="comment" component="div" />
      </label>

      <button
        type="button"
        onClick={() => setStep(true)}
        disabled={!isValid || !dirty}
      >
        Back
      </button>
      <button type="submit" disabled={!(isValid && dirty)}>
        Done
      </button>
    </div>
  );
};
