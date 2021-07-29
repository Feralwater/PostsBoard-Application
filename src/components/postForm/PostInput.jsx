import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { TextField } from '@fluentui/react/lib/TextField';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { addPost } from '../../redusers/postsReduser';
import './PostInput.css';

const PostInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(11);
  const dispatch = useDispatch();

  function getOnClick() {
    return () => {
      dispatch(addPost({
        id: uuid(),
        title,
        body,
        userId,
      }));
      setTitle('');
      setBody('');
      setUserId((prevState) => prevState + 1);
    };
  }

  return (
    <form>
      <TextField
        className="input-title"
        label="Input title"
        type="text"
        value={title}
        required
        borderless
        onChange={(event) => setTitle(event.target.value)}
      />
      <div className="input-body">
        <TextField
          borderless
          required
          label="Your message"
          multiline
          resizable={false}
          type="text"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <DefaultButton
          className="add-button"
          text="add post"
          onClick={getOnClick()}
          allowDisabledFocus
        />
      </div>
    </form>
  );
};
export default PostInput;
