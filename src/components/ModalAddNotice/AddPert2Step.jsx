import { Field, ErrorMessage } from 'formik';


import {
  Text,
  LabelTitle,
  Input,
  ButtonsSection,
  Button,
  SexSection,
  RadioBtnSex,
  LabelSex,
  Sex,
  RadioBtnLabel,
  RadioBtnGroup,
  FemaleIcon,
  MaleIcon,
  CommentInput
} from './ModalAddNotice.styled';

export const SecondPart = ({
  setStep,
  values,
  isValid,
  dirty,
  setFieldValue,
}) => {
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
          <MaleIcon/>
            <Sex>Male</Sex>
          </LabelSex>

          <RadioBtnSex type="radio" name="sex" value="Female" id="female" />
          <LabelSex htmlFor="female">
            <FemaleIcon/>
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

        <Input name="img" type="file" accept="image/*" />
        <ErrorMessage name="img" component="div" />
      </label>

      <label>
        <LabelTitle>Comments</LabelTitle>
        <CommentInput
          as="textarea"
          name="comment"
          placeholder="Type comment"
               
        //   style={{ height: '189px', paddingTop: '31px', resize: 'none' }}
        />
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
