const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

const defaultState = {
  items: [],
  currentPage: 1,
  limit: 10,
  totalCount: 0,
};

export default function postsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        items: [...action.payload].reverse(),
        isFetching: false,
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
}

export const setPosts = (items) => ({ type: SET_POSTS, payload: items });
export const addPost = (item) => ({ type: ADD_POST, payload: item });
export const deletePost = (itemId) => ({ type: DELETE_POST, payload: itemId });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, payload: currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, payload: totalCount });
