import { useState } from 'react';
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
import {
  ModalToggleBtn,
  ModalMenuInner,
  ModalLogoutText,
} from '../UserData/Logout/Logout.styled';
import { ModalMenu } from 'components/Modal/Modal';

import { ReactComponent as DeleteIcon } from './deleteIcon.svg';

export const PetsList = ({ item, handleDeleteCard }) => {
  const [t] = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

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
        <PetDeleteBtn type="button" onClick={() => setModalOpen(true)}>
          <DeleteIcon width={24} height={24} />
        </PetDeleteBtn>
        <ModalMenu onClose={() => setModalOpen(false)} open={modalOpen}>
          <ModalMenuInner>
            <ModalLogoutText>
              Are you sure you want to delete a card?
            </ModalLogoutText>
            <div>
              <ModalToggleBtn
                type="submit"
                onClick={() => {
                  handleDeleteCard(item._id);
                }}
              >
                Yes
              </ModalToggleBtn>
              <ModalToggleBtn type="button" onClick={() => setModalOpen(false)}>
                No
              </ModalToggleBtn>
            </div>
          </ModalMenuInner>
        </ModalMenu>
      </PetInfoItem>
    </PetCard>
  );
};
