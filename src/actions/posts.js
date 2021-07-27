import axios from 'axios';
import { setPosts } from '../redusers/postsReduser';

export const getPosts = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch(setPosts(response.data));
};
