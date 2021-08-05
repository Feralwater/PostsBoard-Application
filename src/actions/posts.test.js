import { test, jest, expect } from 'jest-without-globals';
import { getPosts } from './posts';

// jest.mock('./posts');
// const postsAPIMock = getPosts;

// const result = {
//   userId: 3,
//   id: 23,
//   title: 'maxime id vitae nihil numquam',
//   body: 'veritaligendi\nquae vitae\nest illit quod\net et vel beatis',
// };
// postsAPIMock.mockReturnValue(Promise.resolve(result));

test('success get posts', async () => {
  const thunk = getPosts(1);
  const dispatchMock = jest.fn();
  await thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(2);
});
