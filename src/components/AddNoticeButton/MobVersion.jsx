import { MobBtn, BtnText } from './MobVersion.styled';
import { ReactComponent as PlusIcon } from './akar-icons_plus.svg';
export const MobAddBtn = () => {
  return (
    <>
      <MobBtn>
        <PlusIcon />
        <BtnText>Add pet</BtnText>
      </MobBtn>
    </>
  );
};
