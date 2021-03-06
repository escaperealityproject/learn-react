import jsonPlaceHolder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts');

  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
};
// Fetching users Using loadash
// export const fetchUser = id => async dispatch => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get('/users/' + id);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// Second approach
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get('/users/' + id);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
};
