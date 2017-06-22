import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import posting from './posting';

export default combineReducers({
  form: formReducer,
  user,
  posting,
});
