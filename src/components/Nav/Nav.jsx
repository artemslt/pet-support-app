import { useTranslation } from 'react-i18next';
import { Link, NavContainer } from './Nav.styled';

export const Nav = ({ setOpen }) => {
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
