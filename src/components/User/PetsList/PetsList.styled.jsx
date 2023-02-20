import styled from 'styled-components';

export const PetListCardWrapper = styled.div`
  width: 821px;
`;

export const Title = styled.h3`
  font-family: 'Manrope';
  padding-left: 17px;
  font-weight: 500;
  line-height: 1.37;
  color: #111111;
  font-size: 28px;
`;

export const Container = styled.div`
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

export const ListContainer = styled.div`
  margin-bottom: 22px;
`;

export const PetCard = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
`;

export const PetPhotoWrapper = styled.div`
  margin-right: 32px;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
`;

export const TextTopic = styled.span`
  font-weight: 500;
`;

export const PetPhoto = styled.img`
  width: 161px;
  height: 161px;
  border-radius: 40px;
`;
