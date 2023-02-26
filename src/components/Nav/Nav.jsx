import { useTranslation } from 'react-i18next';
import { Link, NavContainer } from './Nav.styled';

export const Nav = ({ setOpen }) => {
  // console.log(window.screen.orientation.type);

  // const isOrientationLandscape =
  //   window.screen.orientation.type === 'landscape-primary' ? true : false;

  // console.log(isOrientationLandscape);

  const { t } = useTranslation();

  return (
    <NavContainer>
      <Link to="/news" onClick={() => setOpen(false)}>
        {t('News')}
      </Link>

      <Link to="/notices/sell" onClick={() => setOpen(false)}>
        {t('Find_pet')}
      </Link>

      <Link to="/friends" onClick={() => setOpen(false)}>
        {t('Our_friends')}
      </Link>
    </NavContainer>
  );
};
