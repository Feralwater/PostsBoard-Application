const SET_REPOS = 'SET_REPOS';

const defaultState = {
  items: [],
  isFetching: true,
};

export default function postsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export const setPosts = (items) => ({ type: SET_REPOS, payload: items });
