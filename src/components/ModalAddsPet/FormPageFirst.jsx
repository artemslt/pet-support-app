import { useState } from 'react';
import { SelectComponent } from './SelectComponent';
import {
  Error,
  Input,
  Label,
  ErrorSelect,
  WrapperBtn,
  Button,
} from './ModalAddsPet.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onSelector } from 'redux/InputPets/inputPetsSlice';
export const FormePageFist = ({ formik, onClickToggle, onToggleModal }) => {
  const [focus, setFocus] = useState(false);
  const isInput = useSelector(state => state.isInput.toggle);
  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor="">
        Name pet
        <Input
          type="text"
          name="name"
          placeholder="Type name pet"
          autoFocus={true}
        />
        <Error name="name" component="p"></Error>
      </Label>
      <Label htmlFor="">
        Date of birth
        <Input type="text" name="birthday" placeholder="Type date of birth" />
        <Error name="birthday" component="p"></Error>
      </Label>
      <Label htmlFor="">
        Breed
        {!isInput ? (
          <Input type="text" name="breed" placeholder="Type breed" />
        ) : (
          <SelectComponent
            onChange={value => formik.setFieldValue('breed', value.value)}
            value={formik.values.breed}
            onFocus={setFocus}
          />
        )}
        {focus ? (
          <ErrorSelect className="error">{formik.errors.breed}</ErrorSelect>
        ) : null}
        <Error name="breed" component="p"></Error>
      </Label>
      <WrapperBtn>
        <Button
          onClick={() => {
            onClickToggle(false);
          }}
          disabled={!formik.isValid ? true : false}
        >
          next
        </Button>
        <Button
          onClick={e => {
            dispatch(onSelector());
            onToggleModal(e);
          }}
        >
          cancel
        </Button>
      </WrapperBtn>
    </>
  );
};
