import { useTranslation } from 'react-i18next';
import { AddButton, Circle } from './AddNoticeButton.styled';
import { ReactComponent as PlusIcon } from './akar-icons_plus.svg';

export const AddNoticeButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <AddButton type="button" onClick={onClick}>
      {t('Add_pet')}
      {
        <Circle>
          <PlusIcon />
        </Circle>
      }
    </AddButton>
  );
};
