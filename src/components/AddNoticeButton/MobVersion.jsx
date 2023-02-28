import { MobBtn, BtnText } from './MobVersion.styled';
import { ReactComponent as PlusIcon } from 'images/noticePage/akar-icons_plus.svg';
import { useTranslation } from 'react-i18next';
export const MobAddBtn = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <>
      <MobBtn type="button" onClick={onClick}>
        <PlusIcon />
        <BtnText> {t('Add_notice_m')}</BtnText>
      </MobBtn>
    </>
  );
};
