import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('../pages/OurFriendsPage/OurFriendsPage')
);
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const Wrapper = styled.div`
  font-family: ${prop => prop.theme.fonts[1]};

  ${up('mobile')} {
    background: ${prop => prop.theme.colors.activeAccent};
  }
  ${up('tablet')} {
    background: ${prop => prop.theme.colors.background};
  }
  ${up('pc')} {
    background: ${prop => prop.theme.colors.gradient};
  }
`;
