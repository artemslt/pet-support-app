import {
  PetListCardWrapper,
  Title,
  Container,
  ListContainer,
  PetCard,
  PetPhotoWrapper,
  PetPhoto,
  Text,
  TextTopic,
  AddBtnWrapper,
  BtnName,
  AddBtn,
} from './PetsList.styled';

import { ReactComponent as AddPhotoIcon } from './addPhoto.svg';

export const PetsList = () => {
  return (
    <PetListCardWrapper>
      <Container>
        <Title>My pets:</Title>
        <AddBtnWrapper>
          <BtnName>Add pet</BtnName>
          <AddBtn type="button">
            <AddPhotoIcon width={24} height={24} />
          </AddBtn>
        </AddBtnWrapper>
      </Container>

      <ListContainer>
        <PetCard>
          <PetPhotoWrapper>
            <PetPhoto src="" alt="" />
          </PetPhotoWrapper>

          <div>
            <div>
              <Text>
                <TextTopic>Name:</TextTopic>{' '}
              </Text>
              <Text>
                <TextTopic>Date of birth:</TextTopic>{' '}
              </Text>
              <Text>
                <TextTopic>Breed:</TextTopic>{' '}
              </Text>
              <Text>
                <TextTopic>Comments:</TextTopic>{' '}
              </Text>
            </div>
            <button type="button">Delete</button>
          </div>
        </PetCard>
      </ListContainer>
    </PetListCardWrapper>
  );
};
