import { AddButton, Circle } from './AddNoticeButton.styled';
import { ReactComponent as PlusIcon } from './akar-icons_plus.svg';

export const AddNoticeButton = ({ onClick }) => {
  return (
    <AddButton type="button" onClick={onClick}>
      Add pet
      {
        <Circle>
          <PlusIcon />
        </Circle>
      }
    </AddButton>
  );
};
