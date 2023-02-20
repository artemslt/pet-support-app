// import React, { useState } from 'react';
import { StyledBurger } from './Burger.styled';
// import { useState } from 'react';

export const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  // const [modalIsOpen, setModalIsOpen] = useState();

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
