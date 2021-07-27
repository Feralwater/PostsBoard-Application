import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={MainPage} />
  </BrowserRouter>
);

export default App;
