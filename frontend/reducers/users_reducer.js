import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
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
    default:
      return oldState;
  }
};

export default UsersReducer;
