import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { addPost } from '../../redusers/postsReduser';

const PostInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  function getOnClick() {
    return () => {
      dispatch(addPost({
        id: uuid(),
        title,
        body,
      }));
      setTitle('');
      setBody('');
    };
  }

  return (
    <form>
      <Stack>
        <TextField
          label="Input title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          label="Share your minds"
          multiline
          resizable={false}
          type="text"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </Stack>
      <DefaultButton
        text="add post"
        onClick={getOnClick()}
        allowDisabledFocus
      />
    </form>
  );
};
export default PostInput;
