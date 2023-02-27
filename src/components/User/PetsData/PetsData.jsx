import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPets, selectIsLoading } from 'redux/pets/petsSelectors';
import { fetchAllPets, deletePet } from 'redux/pets/petsOperations';
import {
  PetListCardWrapper,
  ListContainer,
  Title,
  NavContainer,
  AddBtnWrapper,
  BtnName,
  AddBtn,
} from './PetsData.styled';
import { PetsList } from '../PetsList/PetsList';
import { ModalAddsPet } from 'components/ModalAddsPet/ModalAddsPet';
import { ModalMenu } from 'components/Modal/Modal';

import { ReactComponent as AddPhotoIcon } from './addPhoto.svg';
import { useTranslation } from 'react-i18next';

export const PetsData = () => {
  const { t } = useTranslation();
  const [modalToggle, setModalToggle] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector(selectPets) ?? [];
  const isLoading = useSelector(selectIsLoading);

  const onToggleModal = e => {
    setModalToggle(false);
  };

  useEffect(() => {
    dispatch(fetchAllPets());
  }, [dispatch]);

  const handleDeleteCard = _id => {
    dispatch(deletePet(_id));
  };

  return (
    <PetListCardWrapper>
      <NavContainer>
        <Title>{t('My_pets')}:</Title>
        <AddBtnWrapper>
          <BtnName>{t('Add_pet')}</BtnName>
          <AddBtn
            type="submit"
            onClick={e => {
              setModalToggle(true);
            }}
          >
            <AddPhotoIcon width={24} height={24} />
          </AddBtn>
        </AddBtnWrapper>
      </NavContainer>

      {list.length !== 0 && isLoading === true && <p>Loading...</p>}

      <ModalMenu onClose={() => setModalToggle(false)} open={modalToggle}>
        <ModalAddsPet onToggleModal={onToggleModal}></ModalAddsPet>
      </ModalMenu>

      <ListContainer>
        {list.length !== 0 &&
          list.map(item => (
            <PetsList
              key={item._id}
              item={item}
              handleDeleteCard={handleDeleteCard}
            ></PetsList>
          ))}
      </ListContainer>
    </PetListCardWrapper>
  );
};
