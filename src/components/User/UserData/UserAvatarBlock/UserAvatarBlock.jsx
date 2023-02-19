// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  AvatarThumb,
  // Avatar,
  ImgPlaceholder,
  Button,
  EditWrapp,
  Text,
} from './userAvatarBlock.styled';

import addIcon from './addIcon.svg';
import cameraIcon from './cameraIcon.svg';

//move to selector

// const selectAvatarURL = state => state.user.avatarURL;

export const UserAvatarBlock = () => {
  // const userAvatar = useSelector(state => state.user.avatarURL);
  // const dispatch = useDispatch();

  const onChangeAvatar = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    console.log('formData', formData);
    if (event.target.files) {
      console.log(event.target.files[0]);
    }
    //додати завантаження і збереження через asyncThunc
    // dispatch(formData);
  };

  return (
    <form encType="multipart/form-data" style={{ position: 'relative' }}>
      <AvatarThumb>
        {/* {userAvatar ? (
          <Avatar src={userAvatar} alt="user avatar" />
        ) : ( */}
        <ImgPlaceholder src={addIcon} />
        {/* )} */}
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
    </form>
  );
};
