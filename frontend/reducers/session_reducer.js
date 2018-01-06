import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

// const _nullUser = Object.freeze({
//   currentUser: null
// }); //I'm copying this from the benchbnb solutions, this is clever

const sessionReducer = ( oldState = {currentUser:null}, action ) => {

  let newState = merge({},oldState);
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    default:
    return oldState;
  }

};

export default sessionReducer;
