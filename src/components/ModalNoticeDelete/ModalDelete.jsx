import { useTranslation } from 'react-i18next';
import { Wrapper, Title, Button } from './ModalDelete.style';

export const ModalDelete = ({ onToggleModal, id, deletePet }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>Are you sure you want to delete this ad?</Title>
      <div>
        <Button
          onClick={() => {
            deletePet(id);
            onToggleModal();
          }}
        >
          {t('Delete')}
        </Button>
        <Button onClick={e => onToggleModal(e)}>Cancel</Button>
      </div>
    </Wrapper>
  );
};
