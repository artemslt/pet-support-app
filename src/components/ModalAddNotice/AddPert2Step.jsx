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
  AddImagelabel,
  InputFile,
  AddPhoto,
  ImageThumb,
  Image,
  ImageDel,
  CancelIcon,
  ImgBox,
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

  function Step() {
    if (!isValid && dirty === false) {
      console.log('Tost');
    } else {
      setStep(true);
    }
  }

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
          <ImgBox>
            <AddImagelabel className={imgUrl ? 'show_img' : ''}>
              <InputFile name="img" type="file" accept="image/*" />
              <AddPhoto />
              <ErrorMessage name="img" component="div" />
            </AddImagelabel>

            {imgUrl && (
              <ImageThumb>
                <Image src={imgUrl} alt="" width="60" />
                <ImageDel onClick={() => setImgUrl(null)}>
                  <CancelIcon />
                </ImageDel>
              </ImageThumb>
            )}
          </ImgBox>
        </div>
      </label>

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
          onClick={Step}
        //   disabled={!isValid || !dirty}
        >
          Back
        </Button>
      </ButtonsSection>
    </div>
  );
};
