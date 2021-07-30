import axios from 'axios';
import { setPosts, setTotalCount } from '../redusers/postsReduser';

export const getPosts = (currentPage, limit) => async (dispatch) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`);
  dispatch(setPosts(response.data));
  dispatch(setTotalCount(response.headers['x-total-count']));
};
