import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <div>
      <Header></Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
