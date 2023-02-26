import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesList } from './NoticesCategoriesList.styled';
import { Spinner } from 'components/Spinner/Spinner.styled';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

export const NoticesCategoriesList = () => {
  const [allNotices, setAllNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { pathname } = useLocation();

  useEffect(() => {
    const getNoticesByCategory = async pathname => {
      try {
        setIsLoading(true);
        if (pathname === '/notices/favorite') {
          const request = await axios.get('notices/favorite');
          setAllNotices(request.data.data.result);
          setIsLoading(false);
          return;
        }
        if (pathname === '/notices/own') {
          const myNotices = await axios.get('notices');
          setAllNotices(myNotices.data.data.result);
          setIsLoading(false);
          return;
        }
        const notices = await axios.get(`notices${pathname}`);
        setAllNotices(notices.data.data.result);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNoticesByCategory(pathname);
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <Spinner style={{ margin: '0 auto' }} />
      ) : (
        <CategoriesList>
          <NoticeCategoryItem items={allNotices} />
        </CategoriesList>
      )}
    </>
  );
};
