
import { combineReducers } from 'redux'
import messages from './messages';
import users from './users';

//Combining all the reducers we  created
export default combineReducers({
  messages,
  users
})