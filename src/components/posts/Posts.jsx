import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';
import Post from './post/Post';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  useEffect(() => {
    dispatch(getPosts());
  });

  return (
    <div>
      { posts.map((post) => <Post post={post} />) }
    </div>
  );
};

export default Posts;
