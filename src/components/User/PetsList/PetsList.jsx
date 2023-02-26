// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  const [t] = useTranslation();
  return (
    <PetCard>
      <PetPhotoWrapper>
        <PetPhoto src={item.photo} alt="" />
      </PetPhotoWrapper>

      <PetInfoItem>
        <div>
          <Text>
            <TextTopic>{t('Name')}: </TextTopic>
            {item.name}
          </Text>
          <Text>
            <TextTopic>{t('Date_of_birth')}: </TextTopic>
            {item.birthday}
          </Text>
          <Text>
            <TextTopic>{t('Breed')}: </TextTopic>
            {item.breed}
          </Text>
          <Text>
            <TextTopic>{t('Comments')}: </TextTopic>
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
