import { useTranslation } from 'react-i18next';
import { AddButton, Circle } from './AddNoticeButton.styled';
import { ReactComponent as PlusIcon } from 'images/noticePage/akar-icons_plus.svg';

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
