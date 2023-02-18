import {} from './UserPage.styled';
import { UserData } from '../../components/User/UserData/UserData';
import { Logout } from '../../components/User/Logout/Logout';
import { PetsList } from '../../components/User/PetsList/PetsList';

export const UserPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        margin: '0 auto',
        padding: '0 0 100px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div>
          <UserData />
          <Logout />
        </div>
        <PetsList />
      </div>
    </div>
  );
};
