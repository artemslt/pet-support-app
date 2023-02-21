import { Error, Input, Label } from './ModalAddsPet.styled';

export const FormePageFist = () => {
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
        <Input type="text" name="breed" placeholder="Type breed" />
        <Error name="breed" component="p"></Error>
      </Label>
    </>
  );
};
