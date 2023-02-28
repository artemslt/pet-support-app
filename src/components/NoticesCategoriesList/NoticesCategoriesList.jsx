import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import {
  CategoriesList,
  MoreText,
  WraperMore,
} from './NoticesCategoriesList.styled';
// import { Spinner } from 'components/Spinner/Spinner.styled';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/NoticeCategoryItem/NoticeCategoryItem.styled';

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
  // const [isLoading, setIsLoading] = useState(false);
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
        console.log(page);
        try {
          // setIsLoading(true);
          if (pathname === '/notices/favorite') {
            const request = await axios.get('notices/favorite', {
              params: { page },
            });
            if (request.data.data.result.length < 10) {
              setMore(false);
            }
            setAllNotices([...allNotices, ...request.data.data.result]);
            // setIsLoading(false);
            return;
          }
          if (pathname === '/notices/own') {
            const myNotices = await axios.get('notices', {
              params: { page },
            });
            if (myNotices.data.data.result.length < 10) {
              setMore(false);
            }
            setAllNotices([...allNotices, ...myNotices.data.data.result]);
            // setIsLoading(false);
            return;
          }
          const notices = await axios.get(`notices${pathname}`, {
            params: { page },
          });
          if (notices.data.data.result.length < 10) {
            setMore(false);
          }
          setAllNotices([...allNotices, ...notices.data.data.result]);
          // setIsLoading(false);
        } catch (error) {
          // setAllNotices([]);s
          setMore(false);
          // setIsLoading(false);
          setStatus(Status.REJECTED);
        } finally {
          setStatus(Status.RESOLVED);
        }
      }
    };
    getNoticesByCategory(pathname);
  }, [allNotices, page, pathname, status]);

  return (
    <CategoriesList>
      {allNotices.length === 0 ? (
        <h2>{t('no_notice')}</h2>
      ) : (
        <NoticeCategoryItem
          items={allNotices}
          onListChange={onListChange}
          pathname={pathname}
        />
      )}

      {more && (
        <Card type="button" onClick={() => loadMore()}>
          <WraperMore>
            <MoreText>{t('Loading')}...</MoreText>
          </WraperMore>
        </Card>
      )}
    </CategoriesList>
  );
};
