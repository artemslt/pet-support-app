import { Link, NavContainer } from './Nav.styled';

export const Nav = ({ setOpen }) => {
  // console.log(window.screen.orientation.type);

  // const isOrientationLandscape =
  //   window.screen.orientation.type === 'landscape-primary' ? true : false;

  // console.log(isOrientationLandscape);
  return (
    <NavContainer>
      <Link to="/news" onClick={() => setOpen(false)}>
        News
      </Link>

      <Link to="/notices" onClick={() => setOpen(false)}>
        Find pet
      </Link>

      <Link to="/friends" onClick={() => setOpen(false)}>
        Our friends
      </Link>
    </NavContainer>
  );
};
