import { Friend } from "components/Friend/Friend";
import React, { useEffect, useState } from 'react';
import sadDog from './sadDog.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriends } from "redux/friends/friendsOperations";
import { selectFriends } from "redux/friends/friendsSelectors";
import { Spinner } from 'components/Spinner/Spinner.styled';
import {
  PartnerTitle,
  CardList,
  FriendsContainer,
  SpinnerContainer,
} from './FriendList.styled';
import { Container } from "components/Container/Container.styled";
import { LanguageButton } from 'components/LanguageButton/LanguageButton';
export const FriendList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchFriends()).then(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <Container>
      <FriendsContainer>
        <LanguageButton></LanguageButton>
        <PartnerTitle>Our friends</PartnerTitle>
        {isLoading ? (
          <SpinnerContainer>
          <Spinner />
          </SpinnerContainer>
        ) : friends && friends.length > 0 ? (
          <CardList>
            {friends.map(({ _id, title, imageUrl, addressUrl, address, email, phone, url , workDays}) => (
              <Friend
                key={_id}
                title={title}
                imageUrl={imageUrl}
                address={address}
                addressUrl={addressUrl}
                email={email}
                phone={phone}
                url={url}
                workDays = {workDays}
              />
            ))}
          </CardList>
        ) : (
            <div>
            <PartnerTitle>Sorry, we don't have any information at the moment. Please try again later. In the meantime, here's a cute photo.</PartnerTitle>
            <img src={sadDog} alt="A sad dog" />
            </div>
        )}
      </FriendsContainer>
    </Container>
  );
};
