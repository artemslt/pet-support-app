import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  LabelTitle,
  Input,
  Error,
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
  const { t } = useTranslation();
  const { typeOfNotice } = values;

  useEffect(() => {
    // set the value of price, based on typeOfNotice value
    if (typeOfNotice !== 'sell') {
      setFieldValue('price', 1);
    }
  }, [typeOfNotice, setFieldValue]);

  return (
    <div>
      <>
        <LabelTitle>
          {t('The_sex')}
          <span>*</span>:
        </LabelTitle>
        <>
          <SexSection role="group">
            <RadioBtnSex type="radio" name="sex" value="male" id="male" />
            <LabelSex htmlFor="male">
              <MaleIcon />
              <Sex>{t('Male')}</Sex>
            </LabelSex>

            <RadioBtnSex type="radio" name="sex" value="female" id="female" />
            <LabelSex htmlFor="female">
              <FemaleIcon />
              <Sex>{t('Female')}</Sex>
            </LabelSex>
          </SexSection>
        </>

        <Error name="sex" component="div" />
      </>

      <label>
        <LabelTitle>
          {t('Location')}
          <span>*</span>:
        </LabelTitle>

        <Input name="location" placeholder={t('Location_p')} />
        <Error name="location" component="div" />
      </label>

      {values.typeOfNotice === 'sell' && (
        <>
          <label>
            <LabelTitle>
              {t('Price')}
              <span>*</span>:
            </LabelTitle>
            <Input name="price" placeholder={t('Price_p')} />
            <Error name="price" component="div" />
          </label>
        </>
      )}

      <div>
        <LabelTitle>
          {t('Load_img')}
          <span>*</span>
        </LabelTitle>
        <div>
          <ImgBox>
            <AddImagelabel className={imgUrl ? 'show_img' : ''}>
              {!imgUrl && (
                <InputFile
                  name="img"
                  type="file"
                  value={imgUrl ? imgUrl : ''}
                  accept="image/png, image/jpeg"
                />
              )}
              <AddPhoto />
              <Error name="img" component="div" />
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
      </div>
      

      <label>
        <LabelTitle>
            {t('Comments')} <span>*</span>
        </LabelTitle>
        <CommentInput
          component="textarea"
          name="comment"
          placeholder={t('Comments_p')}
        />
        <Error name="comment" component="div" />
      </label>

      <ButtonsSection>
        <Button
          type="submit"
          //   name="done"
          disabled={!(isValid && dirty)}
        >
          {t('Done')}
        </Button>
        <Button
          type="button"
          name="back"
          disabled={!isValid || !dirty}
          onClick={() => setStep(true)}
        >
          {t('Back')}
        </Button>
      </ButtonsSection>
    </div>
  );
};
