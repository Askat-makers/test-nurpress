import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewsByCategoryPageBody from '../components/NewsByCategoryComponents/NewsByCategoryPageBody';
import { newsContext } from '../contexts/NewsContext';

const NewsByCategoryPage = props => {
  // для скрола вверх
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { getNewsByCategory, newsByCategory, getNews, news } = useContext(newsContext)
  useEffect(() => {
    getNews(props.history.location.search)
  }, [props.history.location.search])
  useEffect(() => {
    getNewsByCategory(props.match.params.category)
  }, [props.match.params.category])

  return (
    <>
      <NewsByCategoryPageBody props={props}/>
    </>
  );
};

export default NewsByCategoryPage;