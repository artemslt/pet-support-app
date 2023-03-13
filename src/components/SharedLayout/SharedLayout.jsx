import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from 'components/Header/Header';
import { WrapperSharedLayout, IconButton } from './SharedLayout.styled';
import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledChatOpenIcon, StyledChatCloseIcon } from './SharedLayout.styled';

import { Chat } from 'components/Chat/Chat';
import { useAuth } from 'hooks';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');

export const SharedLayout = () => {
  const { t } = useTranslation();
  const { isLoggedIn, user } = useAuth();
  const [isChatOpened, setIsChatOpened] = useState(false);

  const handleChatClick = () => {
    if (!isChatOpened) {
      socket.emit('addUser', { name: user.name, id: user._id });
    }
    setIsChatOpened(prevState => !prevState);
  };

  return (
    <WrapperSharedLayout>
      <Header t={t} />
      {isChatOpened && <Chat socket={socket} />}
      {isLoggedIn && (
        <IconButton type="button" onClick={handleChatClick}>
          {isChatOpened ? <StyledChatCloseIcon /> : <StyledChatOpenIcon />}
        </IconButton>
      )}

      <Suspense>
        <Outlet t={t} />
      </Suspense>
      <StyledContainer
        position="top-center"
        transition={Zoom}
        autoClose={5000}
        hideProgressBar={true}
      />
    </WrapperSharedLayout>
  );
};
