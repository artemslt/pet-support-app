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

import { updateAvatar, refreshUser } from 'redux/auth/authOperations';
import { selectAvatarURL, selectUser } from 'redux/auth/authSelectors';

import addIcon from './addIcon.svg';
import cameraIcon from './cameraIcon.svg';
import { useTranslation } from 'react-i18next';

export const UserAvatarBlock = () => {
  const { t } = useTranslation();
  const userAvatar = useSelector(selectAvatarURL);
  const dispatch = useDispatch();

  const onChangeAvatar = async event => {
    event.preventDefault();

    const formData = new FormData();
    if (event.target.files) {
      const avatar = event.target.files[0];
      formData.append('avatar', avatar);

      dispatch(updateAvatar(formData)).then(() =>
        dispatch(refreshUser(selectUser))
      );
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
            <Text>{t('Edit_photo')}</Text>
          </EditWrapp>
        </label>
      </Button>
    </Form>
  );
};
