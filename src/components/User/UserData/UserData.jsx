import { UserCardWrapp, Title, UserCard } from './UserData.styled';
import { UserAvatarBlock } from './UserAvatarBlock/UserAvatarBlock';
import { UserDataItem } from './UserDataItem/UserDataItem';
import { Logout } from './Logout/Logout';

export const UserData = () => {
  return (
    <UserCardWrapp>
      <Title>My information:</Title>
      <UserCard>
        <UserAvatarBlock />
        <UserDataItem />
        <Logout />
      </UserCard>
    </UserCardWrapp>
  );
};
