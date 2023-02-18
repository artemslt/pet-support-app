import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import {
  authBackgroundDesktop,
  authBackgroundTablet,
  authBackgroundMobile,
} from '../../images';

export const BackgroundWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-origin: border-box;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  ${up('mobile')} {
    background-image: url('${authBackgroundMobile}');
  }
  ${up('tablet')} {
    background-image: url('${authBackgroundTablet}');
  }
  ${up('pc')} {
    background-image: url('${authBackgroundDesktop}');
  }
`;
