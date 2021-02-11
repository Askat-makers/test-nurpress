import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { act } from 'react-dom/test-utils';
import { CATEGORIES_API, CURRENCY_API, NEWS_API } from '../helpers/const';

export const newsContext = createContext()

const INIT_STATE = {
  news: null,
  economicsNews: null,
  currencies: [],
  categories: null,
  newsDetails: null,
  newsByCategory: null,
  newsBySearch: null,
  newsByTag: null
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, news: action.payload }
    case "GET_ECONOMICS_NEWS":
      return { ...state, economicsNews: action.payload }
    case "GET_CURRENCY":
      return { ...state, currencies: action.payload }
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload }
    case "GET_NEWS_DETAILS":
      return { ...state, newsDetails: action.payload }
    case "GET_NEWS_BY_CATEGORY":
      return { ...state, newsByCategory: action.payload }
    case "GET_NEWS_BY_SEARCH":
      return { ...state, newsBySearch: action.payload }
    case "GET_NEWS_BY_TAG":
      return { ...state, newsByTag: action.payload }
    default:
      return { state }
  }
}

const NewsContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  async function getCurrency() {
    const { data } = await axios(`${CURRENCY_API}`)
    var convert = require('xml-js');
    let xml = data
    let result2 = convert.xml2json(xml, { compact: false, spaces: 0 });
    let res3 = JSON.parse(result2)
    let { elements: [first] } = res3
    let array = first.elements
    dispatch({
      type: "GET_CURRENCY",
      payload: array
    })
  }

  async function getNews(page) {
    const { data } = await axios(`${NEWS_API}/posts/${page}`)
    console.log(data)
    dispatch({
      type: "GET_NEWS",
      payload: data
    })
  }

  async function getEconomicsNews() {
    const { data } = await axios(`${NEWS_API}/posts/?category=3&title_post=`)
    dispatch({
      type: "GET_ECONOMICS_NEWS",
      payload: data
    })
  }

  async function getCategories() {
    const { data } = await axios(`${NEWS_API}/category/`)
    dispatch({
      type: "GET_CATEGORIES",
      payload: data
    })
  }

  async function getNewsDetails(id) {
    const { data } = await axios(`${NEWS_API}/posts/${id}/`)
    dispatch({
      type: "GET_NEWS_DETAILS",
      payload: data
    })
  }

  async function getNewsByCategory(category, page = 1) {
    const { data } = await axios(`${CATEGORIES_API}${category}`)
    dispatch({
      type: "GET_NEWS_BY_CATEGORY",
      payload: data
    })
  }

  async function getNewsBySearch(word) {
    const { data } = await axios(`${NEWS_API}/posts/?search=${word}`)
    dispatch({
      type: "GET_NEWS_BY_SEARCH",
      payload: data
    })
  }

  // ___________________________________________________

  async function getNewsByTag(tagId) {
    const { data } = await axios(`${NEWS_API}/posts?tags=${tagId}`)
    dispatch({
      type: "GET_NEWS_BY_TAG",
      payload: data
    })
  }

  // ___________________________________________________

  async function postComment(comment) {
    await axios.post(`${NEWS_API}/comments/`, comment)
  }

  return (
    <newsContext.Provider value={{
      news: state.news,
      economicsNews: state.economicsNews,
      currencies: state.currencies,
      categories: state.categories,
      newsDetails: state.newsDetails,
      newsByCategory: state.newsByCategory,
      newsBySearch: state.newsBySearch,
      newsByTag: state.newsByTag,
      getNews,
      getEconomicsNews,
      getCurrency,
      getCategories,
      getNewsDetails,
      getNewsByCategory,
      getNewsBySearch,
      getNewsByTag,
      postComment
    }}>
      {children}
    </newsContext.Provider>
  );
};

export default NewsContextProvider;