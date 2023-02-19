import { Label, Input, Error } from './RegisterForm.styled';

export const FirstStep = ({page, setPage}) => {
  return (
    <>
      <Label>
        <Input
          autoComplete="on"
          type="text"
          name="email"
          placeholder="Email"
        ></Input>
        <Error name="email" component="p"></Error>
      </Label>
      <Label>
        <Input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
        ></Input>
        <Error name="password" component="p"></Error>
      </Label>
      <Label>
        <Input
          autoComplete="off"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        ></Input>
        <Error name="confirmPassword" component="p"></Error>
      </Label>

    </>
  );
};
