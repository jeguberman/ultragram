import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_IMAGES, RECEIVE_IMAGE } from '../actions/image_actions';
import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const UsersReducer = ( oldState = {}, action) => {
  let newState = merge({}, oldState);
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_USER:
      newState[action.user.id]=action.user;
      return newState;
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState;
    case REMOVE_CURRENT_USER:
      return {};
    case RECEIVE_IMAGES:
      action.authors.forEach(
        (imageJSON) => (merge(newState,imageJSON))
      );
      return newState;
    case RECEIVE_IMAGE:
      newState[action.author.id]=action.author;
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
