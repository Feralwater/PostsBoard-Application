const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

const defaultState = {
  items: [],
  isFetching: true,
};

export default function postsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        items: [...action.payload].reverse(),
      };
    case ADD_POST:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_POST:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export const setPosts = (items) => ({ type: SET_POSTS, payload: items });
export const addPost = (item) => ({ type: ADD_POST, payload: item });
export const deletePost = (itemId) => ({ type: DELETE_POST, payload: itemId });
