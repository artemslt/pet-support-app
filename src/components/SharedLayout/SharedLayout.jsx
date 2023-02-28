import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from 'components/Header/Header';
import { WrapperSharedLayout } from './SharedLayout.styled';
import { useTranslation } from 'react-i18next';
import { StyledContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  const { t } = useTranslation();

  return (
    <WrapperSharedLayout>
      <Header t={t} />
      <Suspense>
        <Outlet t={t} />
      </Suspense>
      <StyledContainer
        position="top-center"
        transition={Zoom}
        autoClose={5000}
        hideProgressBar={true}
      />
    </WrapperSharedLayout>
  );
};
