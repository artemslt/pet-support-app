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

export const PetsList = ({
  _id,
  name,
  comments,
  breed,
  birthday,
  handleDeleteCard,
}) => {
  // const [, setPetDeleteId] = useState(null);

  return (
    <PetCard>
      <PetPhotoWrapper>
        <PetPhoto src="" alt="" />
      </PetPhotoWrapper>

      <PetInfoItem>
        <div>
          <Text>
            <TextTopic>Name: </TextTopic>
            {name}
          </Text>
          <Text>
            <TextTopic>Date of birth: </TextTopic>
            {birthday}
          </Text>
          <Text>
            <TextTopic>Breed: </TextTopic>
            {breed}
          </Text>
          <Text>
            <TextTopic>Comments: </TextTopic>
            {comments}
          </Text>
        </div>
        <PetDeleteBtn
          type="button"
          onClick={() => {
            handleDeleteCard(_id);
          }}
        >
          <DeleteIcon width={24} height={24} />
        </PetDeleteBtn>
      </PetInfoItem>
    </PetCard>
  );
};
