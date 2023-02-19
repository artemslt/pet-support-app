import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from 'components/Header/Header';
import { WrapperSharedLayout } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <WrapperSharedLayout>
      <Header></Header>
      <Suspense>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-center"
        transition={Zoom}
        autoClose={5000}
        hideProgressBar={true}
      />
    </WrapperSharedLayout>
  );
};
