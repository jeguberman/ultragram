import { combineReducers } from 'redux';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
const SessionErrorsReducer = (oldState = null, action) => {
  // debugger
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      // debugger
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
