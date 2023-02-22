import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { selectPets } from 'redux/pets/petsSelectors';
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

import { ReactComponent as AddPhotoIcon } from './addPhoto.svg';

export const PetsData = () => {
  const [showModal, setShowModal] = useState(false);
  const [petsVisible, setPetsVisible] = useState(false);
  const dispatch = useDispatch();

  const list = useSelector(selectPets) ?? [];
  const error = useSelector(selectPets);
  const isLoading = useSelector(selectPets);

  const AddPet = () => {
    // setShowModal(prevState => !prevState);
    console.log('clicked');
    setPetsVisible(true);
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
          <AddBtn type="button" onClick={AddPet}>
            <AddPhotoIcon width={24} height={24} />
          </AddBtn>
        </AddBtnWrapper>
      </NavContainer>
      {/* {pets.length !== 0 && isLoading === true && <p>Loading...</p>}
      {!error && !isLoading && <PetsList />} */}
      <ListContainer>
        {petsVisible ? (
          list.map(({ _id, ...rest }) => (
            <PetsList
              key={_id}
              id={_id}
              {...rest}
              handleDeleteCard={handleDeleteCard}
            />
          ))
        ) : (
          <p>Not loaded</p>
        )}
      </ListContainer>
    </PetListCardWrapper>
  );
};
