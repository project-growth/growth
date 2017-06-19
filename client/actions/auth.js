import axios from 'axios';
import cookie from 'react-cookie';

export function registerUser(params) {
  return dispatch => axios.get('/api/users/register', {
    params })
    .then((response) => {
      cookie.save('token', response.data.token, { path: '/' });
      return dispatch({ type: 'REG_USER_FULFILLED', payload: response.data });
    })
    .catch(err => dispatch({ type: 'REG_USER_REJECTED', payload: err }));
}

export function loginUser(params) {
  return dispatch => axios.post('/api/users/login', params)
  .then(response => dispatch({ type: 'LOGIN_USER_FULFILLED', payload: response.data }))
  .catch(err => dispatch({ type: 'LOGIN_USER_REJECTED', payload: err }));
}

export function logoutUser(params) {
  return dispatch => axios.get('/api/users/logout', params)
  .then(response => dispatch({ type: 'LOGOUT_USER_FULFILLED', payload: response.data }))
  .catch(err => dispatch({ type: 'LOGOUT_USER_REJECTED', paylout: err }));
}
