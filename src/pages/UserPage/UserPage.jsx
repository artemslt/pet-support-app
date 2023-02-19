import { Container, ProfileWrapper } from './UserPage.styled';
import { UserData } from '../../components/User/UserData/UserData';
import { PetsList } from '../../components/User/PetsList/PetsList';

const UserPage = () => {
  return (
    <Container>
      <div>
        <ProfileWrapper>
          <UserData />
          <PetsList />
        </ProfileWrapper>
      </div>
    </Container>
  );
};

export default UserPage;
