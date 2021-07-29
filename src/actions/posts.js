import axios from 'axios';
import { setPosts } from '../redusers/postsReduser';

export const getPosts = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=8&_page=1');
  dispatch(setPosts(response.data));
};
