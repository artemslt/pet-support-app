import { ErrorMessage } from 'formik';
import { useEffect } from 'react';

import {
  LabelTitle,
  Input,
  ButtonsSection,
  Button,
  SexSection,
  RadioBtnSex,
  LabelSex,
  Sex,
  FemaleIcon,
  MaleIcon,
  CommentInput,
  ImgBox,
  AddImagelabel,
  InputFile,
  AddPhoto,
  Image,
  ButtonClose,
  CancelIcon

} from './ModalAddNotice.styled';

export const SecondPart = ({
  setStep,
  values,
  isValid,
  dirty,
  setFieldValue,
  imgUrl,
  setImgUrl,
}) => {
  const { typeOfNotice } = values;

  useEffect(() => {
    // set the value of price, based on typeOfNotice value
    if (typeOfNotice !== 'sell') {
      setFieldValue('price', 1);
    }
  }, [typeOfNotice]);

  return (
    <div>
      <>
        <LabelTitle>
          The sex<span>*</span>:
        </LabelTitle>
        <>
          <SexSection role="group">
            <RadioBtnSex type="radio" name="sex" value="Male" id="male" />
            <LabelSex htmlFor="male">
              <MaleIcon />
              <Sex>Male</Sex>
            </LabelSex>

            <RadioBtnSex type="radio" name="sex" value="Female" id="female" />
            <LabelSex htmlFor="female">
              <FemaleIcon />
              <Sex>Female</Sex>
            </LabelSex>
          </SexSection>
        </>

        <ErrorMessage name="sex" component="div" />
      </>

      <label>
        <LabelTitle>
          Location<span>*</span>:
        </LabelTitle>

        <Input name="location" placeholder="Type location" />
        <ErrorMessage name="location" component="div" />
      </label>

      {values.typeOfNotice === 'sell' && (
        <>
          <label>
            <LabelTitle>
              Price<span>*</span>:
            </LabelTitle>
            <Input name="price" placeholder="Type price" />
            <ErrorMessage name="price" component="div" />
          </label>
        </>
      )}
    
    
      <label>
        <LabelTitle>Load the pet’s image:</LabelTitle>
        <div>
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

        {/* <Input name="img" type="file" accept="image/*" />
        <ErrorMessage name="img" component="div" /> */}
      </label>

      <label>
        <LabelTitle>Comments</LabelTitle>
        <CommentInput as="textarea" name="comment" placeholder="Type comment" />
        <ErrorMessage name="comment" component="div" />
      </label>

      <ButtonsSection>
        <Button type="submit" disabled={!(isValid && dirty)}>
          Done
        </Button>
        <Button
          type="button"
          onClick={() => setStep(true)}
          disabled={!isValid || !dirty}
        >
          Back
        </Button>
      </ButtonsSection>
    </div>
  );
};
