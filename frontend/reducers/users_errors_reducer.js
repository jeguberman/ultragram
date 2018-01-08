import { combineReducers } from 'redux';
import { RECEIVE_USERS_ERRORS, RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
const UsersErrorsReducer = (oldState = null, action) => {
  switch (action.type) {
    case RECEIVE_USERS_ERRORS:
      return action.errors;
    case RECEIVE_USER || RECEIVE_USERS:
      return null;
    default:
      return oldState;
  }
};

export default UsersErrorsReducer;
