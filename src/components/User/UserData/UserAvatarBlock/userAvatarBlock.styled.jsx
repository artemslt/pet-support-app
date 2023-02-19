import styled from 'styled-components';

// export const Container = styled.section`
//   width: 100%;
//   max-width: 1280px;
//   min-width: 320px;
//   margin: 0 auto;
//   /* margin: 0 auto; */
//   /* padding: 0 0 100px; */
// `;

export const AvatarThumb = styled.div`
  display: flex;
  width: 233px;
  height: 233px;
  align-items: center;
  margin: 0px auto;
  background: #fdf7f2;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const ImgPlaceholder = styled.img`
  width: 71px;
  height: 71px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0px auto;
  width: 233px;
  height: 233px;
  background: #fdf7f2;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  border: none;

  background: none;
  fill: #f58256;

  top: 224px;
  right: 0;
`;

export const EditWrapp = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.span`
  margin-left: 4px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
  line-height: 22px;
  color: #111111;
`;
