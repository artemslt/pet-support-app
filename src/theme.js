import { createTheme } from 'styled-breakpoints';

const themeStyles = {
  space: [0, 4, 8, 16, 32, 64],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 36, 42, 48],
  fontWeights: [400, 500, 700],
  fonts: ['Inter', 'Manrope', 'Poppins'],
  colors: {
    mainBlack: '#111111',
    secondaryBlack: '#181C27',
    additionalBlack: '#000000',
    text: '#111321',
    grayText: 'rgba(17, 17, 17, 0.6)',
    inputText: '#535353',
    background: '#FDF7F2',
    mainWhite: '#FFFFFF',
    mainAccent: '#F59256',
    activeAccent: '#FF6101',
    formInputAccnt: 'rgba(245, 146, 86, 0.5);',
    blue: '#3091EB',
    grayBackground: 'rgba(255, 255, 255, 0.6)',
    gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
  },
};

const themeBreakpoints = createTheme({
  mobile: '320px',
  mobileSizeM: '575px',
  tablet: '768px',
  tabletM: '820px',
  pcSizeS: '912px',
  pcSizeM: '1024px',
  pcSizeL: '1200px',
  pc: '1280px',
});

export const theme = { ...themeStyles, ...themeBreakpoints };
