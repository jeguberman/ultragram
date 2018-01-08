import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = ( oldState = {}, action) => {
  let newState = merge({}, oldState);
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_USER:
      newState[action.user.id]=user;
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
