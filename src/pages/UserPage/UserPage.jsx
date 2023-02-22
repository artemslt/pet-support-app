import { Container, ProfileWrapper } from './UserPage.styled';
import { UserData } from '../../components/User/UserData/UserData';
import { PetsData } from '../../components/User/PetsData/PetsData';

const UserPage = () => {
  return (
    <Container>
      <div>
        <ProfileWrapper>
          <UserData />
          <PetsData />
        </ProfileWrapper>
      </div>
    </Container>
  );
};

export default UserPage;
