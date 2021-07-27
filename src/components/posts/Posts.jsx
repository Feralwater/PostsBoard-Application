import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Post from './post/Post';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ul>
      {posts.map((post) => <Post key={post.id} post={post} />)}
    </ul>
  );
};

export default Posts;
