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

export const PetsData = () => {
  // const [petsVisible] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const dispatch = useDispatch();

  const list = useSelector(selectPets) ?? [];
  const isLoading = useSelector(selectIsLoading);

  const onToggleModal = () => {
    setModalToggle(false);
  };

  useEffect(() => {
    dispatch(fetchAllPets());
  }, [dispatch]);

  const handleDeleteCard = _id => {
    console.log('_id', _id);
    dispatch(deletePet(_id));
  };

  return (
    <PetListCardWrapper>
      <NavContainer>
        <Title>My pets:</Title>
        <AddBtnWrapper>
          <BtnName>Add pet</BtnName>
          <AddBtn
            type="submit"
            onClick={() => {
              setModalToggle(true);
            }}
          >
            <AddPhotoIcon width={24} height={24} />
          </AddBtn>
        </AddBtnWrapper>
      </NavContainer>

      {list.length !== 0 && isLoading === true && <p>Loading...</p>}
      {modalToggle && (
        <ModalMenu onClose={() => setModalToggle(false)} open={modalToggle}>
          <ModalAddsPet onToggleModal={onToggleModal}></ModalAddsPet>
        </ModalMenu>
      )}
      <ListContainer>
        {list.length !== 0 &&
          isLoading === false &&
          list.map(({ _id, ...rest }) => (
            <PetsList
              key={_id}
              id={_id}
              {...rest}
              handleDeleteCard={handleDeleteCard}
            />
          ))}
      </ListContainer>
    </PetListCardWrapper>
  );
};
