import { useState } from 'react';
import { SelectComponent } from './SelectComponent';
import { Error, Input, Label, ErrorSelect } from './ModalAddsPet.styled';
import { useSelector } from 'react-redux';
export const FormePageFist = ({ formik }) => {
  const [focus, setFocus] = useState(false);
  const isInput = useSelector(state => state.isInput.toggle);

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
    </>
  );
};
