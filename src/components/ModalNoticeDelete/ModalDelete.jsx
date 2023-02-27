import { Wrapper, Title, Button } from './ModalDelete.style';

export const ModalDelete = ({ onToggleModal, id, deletePet }) => {
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
          Delete
        </Button>
        <Button onClick={e => onToggleModal(e)}>Cancel</Button>
      </div>
    </Wrapper>
  );
};
