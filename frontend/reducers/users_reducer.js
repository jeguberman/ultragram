import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = ( oldState = {}, {type, user}) => {
  let newState = merge({}, oldState);
  Object.freeze(oldState);

  switch(type){
    case RECEIVE_USER:
      newState[user.id]=user;
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
