import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { CategoriesList } from './NoticesCategoriesList.styled';

axios.defaults.baseURL = 'https://pet-support-backend-v8vc.onrender.com/api/';

export const NoticesCategoriesList = () => {
  const [allNotices, setAllNotices] = useState([]);

  let { pathname } = useLocation();

  useEffect(() => {
    const getNoticesByCategory = async pathname => {
      try {
        const notices = await axios.get(`notices${pathname}`);
        setAllNotices(notices.data.data.result);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNoticesByCategory(pathname);
  }, [pathname]);

  return (
    <>
      <CategoriesList>
        <NoticeCategoryItem items={allNotices} />
      </CategoriesList>
    </>
  );
};
