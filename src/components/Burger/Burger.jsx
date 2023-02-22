import { StyledBurger } from './Burger.styled';

export const Burger = ({ open, setOpen }) => {
  // const isExpanded = open ? true : false;

  return (
    <StyledBurger
      // aria-label="Toggle menu"
      // aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      // {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
