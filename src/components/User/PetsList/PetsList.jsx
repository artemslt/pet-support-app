// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import {
  PetCard,
  PetPhotoWrapper,
  PetPhoto,
  PetInfoItem,
  Text,
  TextTopic,
  PetDeleteBtn,
} from '../PetsData/PetsData.styled';

import { ReactComponent as DeleteIcon } from './deleteIcon.svg';

export const PetsList = ({ item, handleDeleteCard }) => {
  return (
    <PetCard>
      <PetPhotoWrapper>
        <PetPhoto src={item.photo} alt="" />
      </PetPhotoWrapper>

      <PetInfoItem>
        <div>
          <Text>
            <TextTopic>Name: </TextTopic>
            {item.name}
          </Text>
          <Text>
            <TextTopic>Date of birth: </TextTopic>
            {item.birthday}
          </Text>
          <Text>
            <TextTopic>Breed: </TextTopic>
            {item.breed}
          </Text>
          <Text>
            <TextTopic>Comments: </TextTopic>
            {item.comment}
          </Text>
        </div>
        <PetDeleteBtn
          type="button"
          onClick={() => {
            handleDeleteCard(item._id);
          }}
        >
          <DeleteIcon width={24} height={24} />
        </PetDeleteBtn>
      </PetInfoItem>
    </PetCard>
  );
};
