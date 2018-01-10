import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';

import merge from 'lodash/merge';



const sessionReducer = ( oldState = {currentUser:null}, action ) => {
  let newState = merge({},oldState);
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUserID: action.currentUser.id };
    case REMOVE_CURRENT_USER:
      return {};
    default:
    return oldState;
  }

};

export default sessionReducer;
