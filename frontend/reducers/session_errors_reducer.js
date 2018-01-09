import { combineReducers } from 'redux';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/image_actions';
const SessionErrorsReducer = (oldState = null, action) => {

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
