import { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesSearch } from 'components/NoticesSearch/NoticesSearch';
import { CommonTitle } from 'components/Title/Title';
import { Outlet } from 'react-router-dom';

import { AddPet } from '../../components/ModalAddNotice/ModalAddNotice';
import { ModalMenu } from 'components/Modal/Modal';
import { ModalMenu } from 'components/Modal/Modal';
// import { useState } from 'react';

const NoticesPage = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const onToggleModal = e => {
    setModalToggle(false);
  };
  return (
    <Container style={{ textAlign: 'center', paddingBottom: 100 }}>
      <button onClick={e => setModalToggle(true)}>open modal</button>
      <ModalMenu onClose={() => setModalToggle(false)} open={modalToggle}>
        <AddPet onToggleModal={onToggleModal}></AddPet>
      </ModalMenu>

      <CommonTitle text={'Find your favorite pet'} />
      <NoticesSearch />
      <NoticesCategoriesNav />
      <Outlet />
    </Container>
  );
};

export default NoticesPage;
