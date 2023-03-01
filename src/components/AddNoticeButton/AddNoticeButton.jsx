import { useTranslation } from 'react-i18next';
import { AddButton, Circle, PlusIcon } from './AddNoticeButton.styled';

export const AddNoticeButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <AddButton type="button" onClick={onClick}>
      <span style={{ width: '120px' }}>{t('Add_notice')}</span>
      {
        <Circle>
          <PlusIcon />
        </Circle>
      }
    </AddButton>
  );
};
