import { Label, Input, Error, Button } from './RegisterForm.styled';

export const SecondStep = ({ page, setPage }) => {
  return (
    <>
      <Label>
        <Input
          autoComplete="on"
          type="text"
          name="name"
          placeholder="Name"
        ></Input>
        <Error name="name" component="p"></Error>
      </Label>
      <Label>
        <Input
          autoComplete="on"
          type="text"
          name="location"
          placeholder="City, region"
        ></Input>
        <Error name="location" component="p"></Error>
      </Label>
      <Label>
        <Input
          autoComplete="on"
          type="text"
          name="phone"
          placeholder="Mobile phone"
        ></Input>
        <Error name="phone" component="p"></Error>
      </Label>
      <Button type="submit">Register</Button>
    </>
  );
};
