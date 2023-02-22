import { useNavigate } from 'react-router-dom';

import { Container } from 'components/Container/Container.styled';
import notfound from '../../images/error.jpg';
import { NotFoundContainer, Image, Redirect } from './NotFound.styled';

const NotFound = () => {
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
          Back to home
        </Redirect>
      </NotFoundContainer>
    </Container>
  );
};

export default NotFound;
