import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redusers/postsReduser';

const PostInput = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          dispatch(addPost({
            id: uuid(),
            title,
          }));
          setTitle('');
        }}
      >
        Add post
      </button>
    </form>
  );
};

export default PostInput;
