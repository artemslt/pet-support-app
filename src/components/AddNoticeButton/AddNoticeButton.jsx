import { AddButton, Circle } from './AddNoticeButton.styled';
import { ReactComponent as PlusIcon } from './akar-icons_plus.svg';

export const AddNoticeButton = () => {
  return (
    <AddButton>
      Add pet{' '}
      {
        <Circle>
          <PlusIcon />
        </Circle>
      }
    </AddButton>
  );
};
