import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Posts from './components/posts/Posts';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Posts} />
  </BrowserRouter>
);

export default App;
