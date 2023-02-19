import { useState } from 'react';
import { SectionHome, TitleHome, BackgroundImage } from './HomePage.styled';
import { ModalMenu } from 'components/Modal/Modal';
import { ModalAddsPet } from 'components/ModalAddsPet/ModalAddsPet';
export const HomePage = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const onToggle = e => {
    setModalToggle(false);
  };
  return (
    <SectionHome>
      <TitleHome>Take good care of your small pets</TitleHome>
      <div>
        <button onClick={() => setModalToggle(true)}>open</button>
        {/* <button onClick={() => setModalToggle(false)}>closes</button> */}
        <ModalMenu open={modalToggle} onClose={() => setModalToggle(false)}>
          <ModalAddsPet onToggle={onToggle} />
        </ModalMenu>
      </div>
      <BackgroundImage />
    </SectionHome>
  );
};
