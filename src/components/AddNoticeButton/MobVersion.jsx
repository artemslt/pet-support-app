import { MobBtn, BtnText } from './MobVersion.styled';
import { ReactComponent as PlusIcon } from './akar-icons_plus.svg';
import { useTranslation } from 'react-i18next';
export const MobAddBtn = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <>
      <MobBtn type="button" onClick={onClick}>
        <PlusIcon />
        <BtnText> {t('Add_pet')}</BtnText>
      </MobBtn>
    </>
  );
};
