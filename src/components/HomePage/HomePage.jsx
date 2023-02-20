import { useState } from 'react';
import { SectionHome, TitleHome, BackgroundImage } from './HomePage.styled';

export const HomePage = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const onToggle = e => {
    setModalToggle(false);
  };
  return (
    <SectionHome>
      <TitleHome>Take good care of your small pets</TitleHome>
      <BackgroundImage />
    </SectionHome>
  );
};
