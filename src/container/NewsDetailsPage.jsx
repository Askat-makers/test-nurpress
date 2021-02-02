import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewsDetailsPageBody from '../components/NewsDetailsPageComponents/NewsDetailsPageBody';
import { newsContext } from '../contexts/NewsContext';

const NewsDetailsPage = (props) => {
  // для скрола вверх
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { getNewsDetails, getEconomicsNews, getNews } = useContext(newsContext)

  useEffect(() => {
    getEconomicsNews()
  }, [])

  useEffect(() => {
    getNews(props.history.location.search)
  }, [props.history.location.search])

  useEffect(() => {
    getNewsDetails(props.match.params.id)
  }, [props.match.params.id])

  const [commentOwner, setCommentOwner] = useState("")
  const [commentValue, setCommentValue] = useState("")

  function handleSubmit() {
    let comment = {
      commentOwner: commentOwner,
      commentValue: commentValue,
      commentCreated: new Date()
    }
  }

  return (
    <div>
      <NewsDetailsPageBody />
    </div>
  );
};

export default NewsDetailsPage;