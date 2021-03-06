import React from 'react';
import Posts from '../posts/Posts';
import PostInput from '../postForm/PostInput';
import './MainPage.css';
import Footer from '../Footer/Footer';

const MainPage = ({ match }) => (
  <>
    <section>Welcome to our posts board! Share with us whatever you want!</section>
    <div className="wrapper">
      <PostInput />
      <Posts match={match} />
    </div>
    <Footer />
  </>
);

export default MainPage;
