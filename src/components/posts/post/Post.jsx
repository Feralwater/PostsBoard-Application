import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../redusers/postsReduser';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div>{post.userId}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <button
        type="button"
        onClick={() => dispatch(deletePost(post.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Post;
