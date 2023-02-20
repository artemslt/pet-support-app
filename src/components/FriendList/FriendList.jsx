    import { Friend } from "components/Friend/Friend";
    import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { fetchFriends } from "redux/friends/friendsOperations";
    import { selectFriends } from "redux/friends/friendsSelectors";
    import {
    PartnerTitle,
    CardList,
} from './FriendList.styled';
    import { Container } from "components/Container/Container.styled";

    export const FriendList = () => {
    const dispatch = useDispatch();
    const friends = useSelector(selectFriends);

    useEffect(() => {
        dispatch(fetchFriends());
    }, [dispatch]);

    return (
        <Container>
        <PartnerTitle>Our friends</PartnerTitle>
        {friends && (
            <CardList>
            {friends.map(({ _id, title, imageUrl, addressUrl, address, email, phone }) => (
                <Friend
                key={_id}
                title={title}
                imageUrl={imageUrl}
                address={address}
                addressUrl={addressUrl}
                email={email}
                phone={phone}
                />
            ))}
            </CardList>
        )}
        </Container>
    );
    }
