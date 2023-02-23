import {
  AddImagelabel,
  Image,
  ImgBox,
  InputFile,
  AddPhoto,
  ButtonClose,
  CancelIcon,
} from './ModalAddNotice.styled';

import { Field, ErrorMessage } from 'formik';

export const SecondPart = ({
  setStep,
  values,
  isValid,
  dirty,
  imgUrl,
  setImgUrl,
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
      <div>
        <p>Load the pet’s image:</p>
        <ImgBox className={imgUrl ? 'show_img' : ''}>
          <AddImagelabel>
            <InputFile name="img" type="file" accept="image/*" />
            <AddPhoto />
            <ErrorMessage name="img" component="div" />
          </AddImagelabel>

          {imgUrl && (
            <>
              <Image src={imgUrl} alt="" width="60" />
              <ButtonClose onClick={() => setImgUrl(null)}>
                <CancelIcon />
              </ButtonClose>
            </>
          )}
        </ImgBox>
      </div>
      <label>
        <p>Comments</p>
        <Field
          as="textarea"
          name="comment"
          placeholder="Type comment"

          // onChange={e => setFieldValue('img', e.currentTarget.files[0])}
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
