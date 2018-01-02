import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const createUser = user => dispatch =>{
  return (APIUtil.createUser(user).then(
    (rUser) => dispatch(receiveCurrentUser(rUser))
  ));
};

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};
