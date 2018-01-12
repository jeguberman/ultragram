import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';

import merge from 'lodash/merge';

const defaultState = {
  currentUserID: null,
};

const sessionReducer = ( oldState = defaultState, action ) => {
  let newState = merge({},oldState);
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUserID: action.currentUser.user.id };
    case REMOVE_CURRENT_USER:
      return defaultState;
    default:
    return oldState;
  }

};

export default sessionReducer;
