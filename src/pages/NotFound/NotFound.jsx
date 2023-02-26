import { useNavigate } from 'react-router-dom';

import { Container } from 'components/Container/Container.styled';
import notfound from '../../images/error.jpg';
import { NotFoundContainer, Image, Redirect } from './NotFound.styled';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container>
      <NotFoundContainer>
        <Image src={notfound}></Image>
        <Redirect
          onClick={() => {
            navigate('/');
          }}
        >
          {t('Back_to_home')}
        </Redirect>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;
