import React, { useContext, useEffect } from 'react';
import SearchPageBody from '../components/SearchPageComponents/SearchPageBody';
import { newsContext } from '../contexts/NewsContext';

const SearchPage = (props) => {
  const {getNewsBySearch} = useContext(newsContext)
  useEffect(() => {
    getNewsBySearch(props.match.params.word)
  }, [props.match.params.word])
  return (
    <div>
      <SearchPageBody props={props}/>
    </div>
  );
};

export default SearchPage;