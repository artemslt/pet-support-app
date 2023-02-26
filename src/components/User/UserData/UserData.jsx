import { UserCardWrapp, Title, UserCard } from './UserData.styled';
import { UserAvatarBlock } from './UserAvatarBlock/UserAvatarBlock';
import { UserDataItem } from './UserDataItem/UserDataItem';
import { Logout } from './Logout/Logout';
import { useTranslation } from 'react-i18next';

export const UserData = () => {
  const { t } = useTranslation();
  return (
    <UserCardWrapp>
      <Title>{t('My_information')}:</Title>
      <UserCard>
        <UserAvatarBlock />
        <UserDataItem />
        <Logout />
      </UserCard>
    </UserCardWrapp>
  );
};
