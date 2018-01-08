import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_IMAGES } from '../actions/image_actions';
import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const UsersReducer = ( oldState = {}, action) => {
  // debugger
  let newState = merge({}, oldState);
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_USER:
      newState[action.user.id]=action.user;
      return newState;
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      newState = merge({},newState,action.currentUser);
      return newState;
    case REMOVE_CURRENT_USER:
      return null;
    case RECEIVE_IMAGES:
      action.authors.forEach(
        (imageJSON) => (merge(newState,imageJSON))
      );
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
