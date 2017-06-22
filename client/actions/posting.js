import axios from 'axios';

export function createPost(params) {
  return dispatch => axios.post('/api/posting/create', params)
    .then(response => dispatch({ type: 'CREATE_POST_FULFILLED', payload: response.data }))
    .catch(err => dispatch({ type: 'CREATE_POST_REJECTED', payload: err }));
}
