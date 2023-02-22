import { useDispatch } from 'react-redux';
import { components } from 'react-select';
import {
  ButtonRemoveSelect,
  NoOptionsMessageSpan,
} from './ModalAddsPet.styled';
import { onInput } from 'redux/InputPets/inputPetsSlice';
export const NoOptionsMessage = props => {
  const dispatch = useDispatch();

  return (
    <components.NoOptionsMessage {...props}>
      <NoOptionsMessageSpan className="custom-css-class">
        Didn't find the right breed?
      </NoOptionsMessageSpan>
      <ButtonRemoveSelect onClick={() => dispatch(onInput())}>
        Write by hand
      </ButtonRemoveSelect>
    </components.NoOptionsMessage>
  );
};
