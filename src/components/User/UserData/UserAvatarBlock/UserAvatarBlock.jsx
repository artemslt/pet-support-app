// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  AvatarThumb,
  Avatar,
  ImgPlaceholder,
  Button,
  EditWrapp,
  Text,
} from './userAvatarBlock.styled';

import { updateAvatar } from 'redux/auth/authOperations';
import { selectAvatarURL } from 'redux/auth/authSelectors';

import addIcon from './addIcon.svg';
import cameraIcon from './cameraIcon.svg';

//move to selector

// const selectAvatarURL = state => state.user.avatarURL;

export const UserAvatarBlock = () => {
  const userAvatar = useSelector(selectAvatarURL);
  const dispatch = useDispatch();

  const onChangeAvatar = event => {
    event.preventDefault();

    const formData = new FormData();
    if (event.target.files) {
      const avatar = event.target.files[0];
      formData.append('avatar', avatar);
      console.log('formData', formData);

      console.log(event.target.files[0]);
      dispatch(updateAvatar(formData));
    }
  };

  return (
    <Form encType="multipart/form-data">
      <AvatarThumb>
        {userAvatar ? (
          <Avatar src={userAvatar} alt="user avatar" />
        ) : (
          <ImgPlaceholder src={addIcon} />
        )}
      </AvatarThumb>
      <Button type="button">
        <label htmlFor="uploadAvatar">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="userAvatar"
            id="uploadAvatar"
            style={{ width: 0, height: 0, opacity: 0 }}
            onChange={onChangeAvatar}
          />
          <EditWrapp>
            <img src={cameraIcon} alt="" />
            <Text>Edit photo</Text>
          </EditWrapp>
        </label>
      </Button>
    </Form>
  );
};
