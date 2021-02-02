import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './container/HomePage';
import NewsByCategoryPage from './container/NewsByCategoryPage';
import NewsDetailsPage from './container/NewsDetailsPage';
import SearchPage from './container/SearchPage';
import NewsContextProvider from './contexts/NewsContext';

const Routes = () => {
  return (
    <BrowserRouter>
      <NewsContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news-detail:id" component={NewsDetailsPage} />
          <Route exact path="/news-by-category/:category" component={NewsByCategoryPage} />
          <Route exact path="/search/:word" component={SearchPage} />
        </Switch>
      </NewsContextProvider>
    </BrowserRouter>
  );
};

export default Routes;