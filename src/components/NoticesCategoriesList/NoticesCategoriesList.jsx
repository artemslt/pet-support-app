import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { ButtonMore, CategoriesList } from './NoticesCategoriesList.styled';
import { useTranslation } from 'react-i18next';
import { Spinner } from 'components/Spinner/Spinner.styled';
import ScrollButton from './ScrollToTop';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const NoticesCategoriesList = () => {
  const { t } = useTranslation();
  const [allNotices, setAllNotices] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);
  const [more, setMore] = useState(true);

  let { pathname } = useLocation();

  const [newPath, setNewPath] = useState(pathname);

  function onListChange(newList) {
    setAllNotices(newList);
  }

  function loadMore() {
    setPage(page + 1);
    setStatus(Status.IDLE);
  }

  useEffect(() => {
    if (newPath !== pathname) {
      setMore(true);
      setPage(1);
      setNewPath(pathname);
      setStatus(Status.IDLE);
      setAllNotices([]);
    }
  }, [allNotices.length, newPath, pathname]);

  useEffect(() => {
    const getNoticesByCategory = async pathname => {
      if (status === Status.IDLE) {
        try {
          if (pathname === '/notices/favorite') {
            const request = await axios.get('notices/favorite', {
              params: { page, limit: '12' },
            });
            if (request.data.data.result.length < 10) {
              setMore(false);
            }
            setAllNotices([...allNotices, ...request.data.data.result]);

            return;
          }
          if (pathname === '/notices/own') {
            const myNotices = await axios.get('notices', {
              params: { page, limit: '12' },
            });
            if (myNotices.data.data.result.length < 10) {
              setMore(false);
            }
            setAllNotices([...allNotices, ...myNotices.data.data.result]);

            return;
          }
          const notices = await axios.get(`notices${pathname}`, {
            params: { page, limit: '12' },
          });
          if (notices.data.data.result.length < 10) {
            setMore(false);
          }
          setAllNotices([...allNotices, ...notices.data.data.result]);
        } catch (error) {
          setMore(false);
          setStatus(Status.REJECTED);
        } finally {
          setStatus(Status.RESOLVED);
        }
      }
    };
    getNoticesByCategory(pathname);
  }, [allNotices, page, pathname, status]);

  return (
    <>
      <CategoriesList>
        {allNotices.length === 0 && status === Status.RESOLVED && (
          <h2>{t('no_notice')}</h2>
        )}
        {allNotices.length !== 0 && (
          <NoticeCategoryItem
            items={allNotices}
            onListChange={onListChange}
            pathname={pathname}
          />
        )}

        {more && status === Status.RESOLVED && (
          <ButtonMore type="button" onClick={() => loadMore()}>
            {t('Loading')}
          </ButtonMore>
        )}

        {status === Status.IDLE && <Spinner />}
        <ScrollButton />
      </CategoriesList>
    </>
  );
};