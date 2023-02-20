import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  authBackgroundDesktop,
  authBackgroundTablet,
  authBackgroundMobile,
} from '../../images';

export const BackgroundWrapper = styled.div`
height: 100vh;
  background-color: ${prop => prop.theme.colors.background};
  background-origin: border-box;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url('${authBackgroundMobile}');
  ${up('mobileSizeM')} {
    background-image: url('${authBackgroundTablet}');
  }
  ${up('pc')} {
    background-image: url('${authBackgroundDesktop}');
  }
`;
