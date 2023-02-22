import styled from 'styled-components';

export const PetListCardWrapper = styled.div`
  width: 821px;
`;

export const Title = styled.h3`
  font-family: 'Manrope';
  padding-left: 40px;
  font-weight: 500;
  line-height: 1.37;
  color: #111111;
  font-size: 28px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const BtnName = styled.span`
  font-family: 'Manrope';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.37;
  margin-right: 23px;
`;

export const AddBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f59256;
  border: none;
  cursor: pointer;
`;

export const AddBtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ListContainer = styled.ul`
  margin: 0;
`;

export const PetCard = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  padding: 20px;
  margin-bottom: 22px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PetPhotoWrapper = styled.div`
  margin-right: 32px;
`;

export const PetInfoItem = styled.div`
  position: relative;
  width: 100%;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TextTopic = styled.span`
  font-weight: 500;
`;

export const PetPhoto = styled.img`
  margin: 0px auto;
  width: 161px;
  height: 161px;
  border-radius: 40px;
  object-fit: cover;
`;

export const PetDeleteBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  height: 44px;
  width: 44px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 50%;
  background-color: #fdf7f2;
  cursor: pointer;
`;
