import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import {
  waveBgMobile,
  waveBgMobileX,
  PhotoMobile,
  PhotoMobileX,
  waveBgTablet,
  waveBgTabletX,
  PhotoTablet,
  PhotoTabletX,
  waveBgDesktop,
  waveBgDesktopX,
  waveBgDesktopLayer,
  waveBgDesktopLayerX,
  waveBgDesktopHeart,
  waveBgDesktopHeartX,
  PhotoDesktop,
  PhotoDesktopX,
} from 'images/home';

export const SectionHome = styled.section`
  padding-top: 60px;
  ${up('tablet')} {
    padding-top: 88px;
  }
  ${up('pc')} {
    padding-top: 92px;
  }
`;

export const TitleHome = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  font-family: ${({ theme }) => theme.fonts[1]};

  ${up('tablet')} {
    font-size: 68px;
    line-height: calc(100 / 68);
    text-align: left;
    width: 588px;
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: -555;
  bottom: 0;

  background-repeat: no-repeat, no-repeat;
  background-size: 320px, 100%;
  background-position-y: 100%, 102%;
  background-position-x: 50%;
  background-image: url(${PhotoMobile}), url(${waveBgMobile});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${PhotoMobileX}), url(${waveBgMobileX});
  }

  @media (min-width: 363px) {
    background-image: url(${PhotoTablet}), url(${waveBgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoTabletX}), url(${waveBgTabletX});
    }
  }

  @media (min-width: 540px) {
    height: 90%;
    background-size: 67%, 100%;
    background-position-y: 100%, -7%;
    background-position-x: 50%, 10%;
    background-image: url(${PhotoTablet}), url(${waveBgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoTabletX}), url(${waveBgTabletX});
    }
  }

  ${up('tablet')} {
    height: 90%;
    background-size: 67%, 100%;
    background-position-y: 100%, 10%;
    background-position-x: 50%, 20%;
    background-image: url(${PhotoTablet}), url(${waveBgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoTabletX}), url(${waveBgTabletX});
    }
  }
  ${up('tabletM')} {
    height: 85%;
    background-size: 77%, 100%;
    background-position-y: 100%, 60%;
    background-position-x: 50%, 50%;
    background-image: url(${PhotoTablet}), url(${waveBgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoTabletX}), url(${waveBgTabletX});
    }
  }

  ${up('pcSizeS')} {
    height: 100%;
    background-size: 78%, 100%;
    background-position-y: 100%, 60%;
    background-position-x: 50%, 50%;
    background-image: url(${PhotoTablet}), url(${waveBgTablet});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoTabletX}), url(${waveBgTabletX});
    }
  }

  ${up('pcSizeM')} {
    width: 100%;
    background-size: 43%, 6%, 27%, 72%;
    background-position-y: 100%, 33%, 100%, 101%;
    background-position-x: 100%, 65%, 100%, 42%;

    background-image: url(${PhotoDesktop}), url(${waveBgDesktopHeart}),
      url(${waveBgDesktopLayer}), url(${waveBgDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoDesktopX}),
        url(${waveBgDesktopHeartX}) url(${waveBgDesktopLayerX}),
        url(${waveBgDesktopX});
    }
  }

  ${up('pc')} {
    width: 100%;
    background-position-y: 100%, 100%, 22%, 100%;
    background-position-x: 100%, 100%, 56%, -69%;
    background-size: 46%, 37%, 7%, 96%;

    background-image: url(${PhotoDesktop}), url(${waveBgDesktopLayer}),
      url(${waveBgDesktopHeart}), url(${waveBgDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoDesktopX}), url(${waveBgDesktopLayerX}),
        url(${waveBgDesktopHeartX}), url(${waveBgDesktopX});
    }
  }

  @media (min-width: 1343px) {
    width: 100%;
    background-position-y: 100%, 100%, 22%, 100%;
    background-position-x: 100%, 100%, 56%, 79%;
    background-size: 32%, 25%, 5%, 75%;

    background-image: url(${PhotoDesktop}), url(${waveBgDesktopLayer}),
      url(${waveBgDesktopHeart}), url(${waveBgDesktop});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PhotoDesktopX}), url(${waveBgDesktopLayerX}),
        url(${waveBgDesktopHeartX}), url(${waveBgDesktopX});
    }
  }
`;
