import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainPage from './components/mainPage/MainPage';

const App = () => {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/page/:pageNumber" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
