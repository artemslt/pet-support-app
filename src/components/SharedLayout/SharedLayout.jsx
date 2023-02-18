import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Container } from './container.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header></Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
