import { combineReducers } from 'redux';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/image_actions';
const SessionErrorsReducer = (oldState = [], action) => {

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return {session: "drgrtwefrt"};
    case RECEIVE_CURRENT_USER:
      return {session:[]};
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
