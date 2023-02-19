import { useState } from 'react';

import { Label, Input, Error, IconButton } from './RegisterForm.styled';
import { ReactComponent as EyeIcon } from '../../images/eye.svg';
import { ReactComponent as EyeClosedIcon } from '../../images/eye-slash.svg';

export const FirstStep = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
        ></Input>
        <Error name="password" component="p"></Error>
        <IconButton
          type="button"
          onClick={() => {
            setShowPassword(prevState => !prevState);
          }}
        >
          {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
        </IconButton>
      </Label>
      <Label>
        <Input
          autoComplete="off"
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
        ></Input>
        <Error name="confirmPassword" component="p"></Error>
        <IconButton
          type="button"
          onClick={() => {
            setShowConfirmPassword(prevState => !prevState);
          }}
        >
          {showConfirmPassword ? <EyeClosedIcon /> : <EyeIcon />}
        </IconButton>
      </Label>
    </>
  );
};
