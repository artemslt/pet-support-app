import { MobBtn, BtnText } from './MobVersion.styled';
import { ReactComponent as PlusIcon } from './akar-icons_plus.svg';
export const MobAddBtn = ({ onClick }) => {
  return (
    <>
      <MobBtn type="button" onClick={onClick}>
        <PlusIcon />
        <BtnText>Add pet</BtnText>
      </MobBtn>
    </>
  );
};
