import { useState } from 'react';
import { SectionHome, TitleHome, BackgroundImage } from './HomePage.styled';
import { Container } from 'components/Container/Container.styled';
import { ModalMenu } from 'components/Modal/Modal';
import { ModalAddsPet } from 'components/ModalAddsPet/ModalAddsPet';
export const HomePage = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const onToggleModal = e => {
    setModalToggle(false);
  };
  return (
    <SectionHome>
      <Container>
        <TitleHome>Take good care of your small pets</TitleHome>
        <button onClick={e => setModalToggle(true)}>open modal</button>
        <ModalMenu onClose={() => setModalToggle(false)} open={modalToggle}>
          <ModalAddsPet onToggleModal={onToggleModal}></ModalAddsPet>
        </ModalMenu>
      </Container>
      <BackgroundImage />
    </SectionHome>
  );
};
