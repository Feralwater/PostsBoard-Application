import postsReducer, { setPosts } from './postsReduser';

const items = [
  {
    userId: 1,
    id: 1,
    title: 'sunt ',
    body: 'quia et suscipit\nsuscipur expedita et cum\nreprehet ut quas totam\nnostrum',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint ea dolores neque\nfugiat blanditiciendis\nqui aper debilla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molesnem repellat qui ipsa sit aut',
    body: 'et ius quo iure\nvolligendi aut ad\nvoluptatem dom quis pariatur\nmolestiae t',
  },
];
it('posts should be set', () => {
  // 1. test data
  const action = setPosts(items);
  const defaultState = {
    items: [],
  };
  // 2. action
  const newState = postsReducer(defaultState, action);

  // 3. expectation
  expect(newState.items.length)
    .toBe(3);
});
