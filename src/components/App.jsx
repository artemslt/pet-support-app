// import styled from 'styled-components';
// import { up } from 'styled-breakpoints';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';

import { useAuth } from 'hooks';
import { Spinner } from './Spinner/Spinner.styled';
import { SpinnerContainer } from './FriendList/FriendList.styled';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';

import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

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
const ResetPasswordPage = lazy(() =>
  import('../pages/ResetPasswordPage/ResetPasswordPage')
);
const RequestResetPasswordPage = lazy(() =>
  import('../pages/RequestResetPasswordPage/RequestResetPasswordPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PrivateRoute component={Home} redirectTo="/notices/sell/" />
              }
            />
            <Route path="news" element={<NewsPage />} />
            <Route path="notices" element={<NoticesPage />}>
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route path="lost-found" element={<NoticesCategoriesList />} />
              <Route path="for-free" element={<NoticesCategoriesList />} />
              <Route path="favorite" element={<NoticesCategoriesList />} />
              <Route path="own" element={<NoticesCategoriesList />} />
            </Route>
            <Route path="friends" element={<OurFriendsPage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute component={RegisterPage} redirectTo="/user" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/user" />
              }
            />
            <Route
              path="user"
              element={
                <PrivateRoute component={UserPage} redirectTo="/login" />
              }
            />
            <Route path="requestreset" element={<RequestResetPasswordPage />} />
            <Route
              path="resetpassword/:resetToken"
              element={
                <RestrictedRoute
                  component={ResetPasswordPage}
                  redirectTo="/user"
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

// const Wrapper = styled.div`
//   font-family: ${prop => prop.theme.fonts[1]};

//   ${up('mobile')} {
//     background: ${prop => prop.theme.colors.activeAccent};
//   }
//   ${up('tablet')} {
//     background: ${prop => prop.theme.colors.background};
//   }
//   ${up('pc')} {
//     background: ${prop => prop.theme.colors.gradient};
//   }
// `;
